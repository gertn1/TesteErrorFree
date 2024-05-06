import { notification } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPhone } from '~/commons/helpers/formatUtils';
import Button from '~/components/Button';
import { TextField } from '~/components/TextField';
import Partner from '~/services/api/partners/Partner';
import PartnerService from '~/services/api/partners/PartnerService';
import { ButtonContainer, ContainerNewPartner, ContentNewPartner } from '../style';

export const EditPartner: FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const prevState = location.state;

  const { register, handleSubmit, setValue } = useForm<Partial<Partner>>();

  useEffect(() => {
    fillFields();
  }, []);

  const partnerService = new PartnerService();
  const navigate = useNavigate();

  const fillFields = () => {
    setValue('name', prevState.partner.name);
    setValue('description', prevState.partner.description);
    setValue('email', prevState.partner.email);
    setValue('registrationNumber', prevState.partner.registrationNumber);
    setValue('phone', prevState.partner.phone);
  };

  const onSubmit = async (formDataPartner: Partial<Partner>) => {
    setLoading(true);
    try {
      const updatedData = { ...prevState.partner, ...formDataPartner };
      const response = await partnerService.update(updatedData as Partner);
      if (response.isSuccess) {
        notification.success({
          message: 'Parceiro atualizado com sucesso!',
        });
        navigate('/partners');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao criar parceiro',
        description: error.response?.data?.message || 'Erro desconhecido ao criar parceiro',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/partners');
  };

  return (
    <ContainerNewPartner>
      <ContentNewPartner onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField label="Nome" placeholder="Nome" {...register('name')} />
        </div>
        <div>
          <TextField label="Descrição" placeholder="Descrição" {...register('description')} />
        </div>
        <div>
          <TextField label="CNPJ" placeholder="CNPJ" {...register('registrationNumber')} />
        </div>
        <div>
          <TextField label="E-mail" placeholder="E-mail" {...register('email')} />
        </div>
        <div>
          <TextField
            label="Telefone"
            placeholder="Telefone"
            {...register('phone')}
            onChange={(e) => {
              const formattedValue = formatPhone(e.target.value);
              setValue('phone', formattedValue);
            }}
          />
        </div>
      </ContentNewPartner>
      <ButtonContainer>
        <Button color="primary" label="Salvar" loading={loading} onClick={handleSubmit(onSubmit)} />
        <Button color="primary" label="Cancelar" loading={loading} onClick={handleCancel} />
      </ButtonContainer>
    </ContainerNewPartner>
  );
};
