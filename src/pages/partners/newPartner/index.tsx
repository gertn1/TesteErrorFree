import { zodResolver } from '@hookform/resolvers/zod';
import { notification } from 'antd';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { formatCNPJ, formatPhone } from '~/commons/helpers/formatUtils';
import Button from '~/components/Button';
import { TextField } from '~/components/TextField';
import Partner from '~/services/api/partners/Partner';
import PartnerService from '~/services/api/partners/PartnerService';
import { ButtonContainer, ContainerNewPartner, ContentNewPartner } from '../style';

const schema = z.object({
  name: z.string().min(3, 'Deve ter no mínimo 3 caracteres'),
  description: z.string().min(1, 'É obrigatório'),
  registrationNumber: z.string().min(1, 'É obrigatório'),
  email: z.string().email('E-mail inválido').min(1, 'É obrigatório'),
  phone: z.string().min(1, 'é obrigatório'),
  companyId: z.string().min(1, 'é obrigatório'),
});

export const NewPartner: FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Partial<Partner>>({
    resolver: zodResolver(schema),
  });

  const partnerService = new PartnerService();

  const navigate = useNavigate();

  const onSubmit = async (formDataPartner: Partial<Partner>) => {
    setLoading(true);
    try {
      const response = await partnerService.create(formDataPartner as Partner);
      if (response.isSuccess) {
        notification.success({
          message: 'Parceiro criado com sucesso!',
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

  return (
    <ContainerNewPartner>
      <ContentNewPartner onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField label="Nome" placeholder="Nome" hasError={!!errors.name} {...register('name')} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div>
          <TextField
            label="Descrição"
            placeholder="Descrição"
            hasError={!!errors.description}
            {...register('description')}
          />
          {errors.description && <span className="error">{errors.description.message}</span>}
        </div>
        <div>
          <TextField
            label="CNPJ"
            placeholder="CNPJ"
            hasError={!!errors.registrationNumber}
            {...register('registrationNumber')}
            onChange={(e) => {
              const formattedValue = formatCNPJ(e.target.value);
              setValue('registrationNumber', formattedValue);
            }}
          />
          {errors.registrationNumber && <span className="error">{errors.registrationNumber.message}</span>}
        </div>
        <div>
          <TextField
            label="E-mail"
            placeholder="E-mail"
            hasError={!!errors.email}
            {...register('email')} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
        <div>
          <TextField
            label="Telefone"
            placeholder="Telefone"
            hasError={!!errors.phone}
            {...register('phone')}
            onChange={(e) => {
              const formattedValue = formatPhone(e.target.value);
              setValue('phone', formattedValue);
            }}
          />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </div>
        <div>
          <TextField
            label="ID da Empresa"
            placeholder="ID da Empresa"
            hasError={!!errors.companyId}
            {...register('companyId')}
          />
          {errors.companyId && <span className="error">{errors.companyId.message}</span>}
        </div>
      </ContentNewPartner>
      <ButtonContainer>
        <Button color="primary" label="Criar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
    </ContainerNewPartner>
  );
};
