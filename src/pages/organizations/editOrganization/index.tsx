import { notification } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatCNPJ, formatPhone, formatPostalCode } from '~/commons/helpers/formatUtils';
import Button from '~/components/Button';
import { TextField } from '~/components/TextField';
import { Company } from '~/services/api/companies/Company';
import CompanyService from '~/services/api/companies/CompanyService';
import { ButtonContainer, ContainerNewOrganization, ContentNewOrganization } from '../style';

export const EditOrganization: FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const prevState = location.state;

  const { register, handleSubmit, setValue } = useForm<Partial<Company>>();

  useEffect(() => {
    fillFields();
  }, []);

  const onSubmit = async (formDataOrganization: Partial<Company>) => {
    const companyService = new CompanyService();
    setLoading(true);
    try {
      const updatedData = { ...prevState.organization, ...formDataOrganization };
      const response = await companyService.update(updatedData as Company);
      if (response.isSuccess) {
        notification.success({
          message: 'Organização atualizada com sucesso!',
        });
        navigate('/organizations');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao atualizar organização',
        description: error.response?.data?.message || 'Erro desconhecido ao atualizar organização',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/organizations');
  };

  const fillFields = () => {
    setValue('name', prevState.organization.name);
    setValue('description', prevState.organization.description);
    setValue('companyRegistrationNumber', prevState.organization.companyRegistrationNumber);
    setValue('comporateReason', prevState.organization.comporateReason);
    setValue('city', prevState.organization.city);
    setValue('state', prevState.organization.state);
    setValue('postalCode', prevState.organization.postalCode);
    setValue('country', prevState.organization.country);
    setValue('phone', prevState.organization.phone);
    setValue('taxPercentage', prevState.organization.taxPercentage);
  };
  return (
    <ContainerNewOrganization>
      <ContentNewOrganization onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField label="Nome" placeholder="Nome" {...register('name')} />
        </div>
        <div>
          <TextField label="Descrição" placeholder="Descrição" {...register('description')} />
        </div>
        <div>
          <TextField
            label="CNPJ"
            placeholder="CNPJ"
            type="text"
            {...register('companyRegistrationNumber')}
            onChange={(e) => {
              const formattedValue = formatCNPJ(e.target.value);
              setValue('companyRegistrationNumber', formattedValue);
            }}
          />
        </div>
        <div>
          <TextField label="Razão Social" placeholder="Razão Social" {...register('comporateReason')} />
        </div>
        <div>
          <TextField label="Cidade" placeholder="Cidade" {...register('city')} />
        </div>
        <div>
          <TextField label="Estado" placeholder="Estado" {...register('state')} />
        </div>
        <div>
          <TextField
            label="Código Postal"
            placeholder="Código Postal"
            type="text"
            {...register('postalCode')}
            onChange={(e) => {
              const formattedValue = formatPostalCode(e.target.value);
              setValue('postalCode', formattedValue);
            }}
          />
        </div>
        <div>
          <TextField label="País" placeholder="País" {...register('country')} />
        </div>
        <div>
          <TextField
            label="Telefone"
            placeholder="Telefone"
            type="text"
            {...register('phone')}
            onChange={(e) => {
              const formattedValue = formatPhone(e.target.value);
              setValue('phone', formattedValue);
            }}
          />
        </div>
        <div>
          <TextField label="Taxa" placeholder="Taxa" type="text" {...register('taxPercentage')} />
        </div>
      </ContentNewOrganization>

      <ButtonContainer>
        <Button color="primary" label="Salvar" loading={loading} onClick={handleSubmit(onSubmit)} />

        <Button color="primary" label="Cancelar" loading={loading} onClick={handleCancel} />
      </ButtonContainer>
    </ContainerNewOrganization>
  );
};
