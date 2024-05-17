import { zodResolver } from '@hookform/resolvers/zod';
import { notification } from 'antd';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { formatCNPJ, formatPhone, formatPostalCode } from '~/commons/helpers/formatUtils';
import Button from '~/components/Button';
import { TextField } from '~/components/TextField';
import { Company } from '~/services/api/companies/Company';
import CompanyService from '~/services/api/companies/CompanyService';
import { ButtonContainer, ContainerNewOrganization, ContentNewOrganization } from '../style';


const schema = z.object({
  name: z.string().min(3, 'Deve ter no mínimo 3 caracteres'),
  description: z.string().min(1, 'é obrigatório'),
  companyRegistrationNumber: z.string().min(1, 'é obrigatório'),
  comporateReason: z.string().min(1, 'é obrigatório'),
  city: z.string().min(1, 'é obrigatório'),
  state: z.string().min(1, 'é obrigatório'),
  postalCode: z.string().min(1, 'é obrigatório'),
  country: z.string().min(1, 'é obrigatório'),
  phone: z.string().min(1, 'é obrigatório'),
  taxPercentage: z.string().min(1, 'é obrigatório'),
});

export const NewOrganization: FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Partial<Company>>({
    resolver: zodResolver(schema),
  });

  const companyService = new CompanyService();

  const navigate = useNavigate();

  const onSubmit = async (formDataOrganization: Partial<Company>) => {
    setLoading(true);
    try {
      const response = await companyService.create(formDataOrganization as Company);
      if (response.isSuccess) {
        notification.success({
          message: 'Organização criada com sucesso!',
        });
        navigate('/organizations');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao criar organização',
        description: error.response?.data?.message || 'Erro desconhecido ao criar organização',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerNewOrganization>
      <ContentNewOrganization onSubmit={handleSubmit(onSubmit)}>
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
            hasError={!!errors.companyRegistrationNumber}
            {...register('companyRegistrationNumber')}
            onChange={(e) => {
              const formattedValue = formatCNPJ(e.target.value);
              setValue('companyRegistrationNumber', formattedValue);
            }}
          />
          {errors.companyRegistrationNumber && (
            <span className="error">{errors.companyRegistrationNumber.message}</span>
          )}
        </div>
        <div>
          <TextField
            label="Razão Social"
            placeholder="Razão Social"
            hasError={!!errors.comporateReason}
            {...register('comporateReason')}
          />
          {errors.comporateReason && <span className="error">{errors.comporateReason.message}</span>}
        </div>
        <div>
          <TextField label="Cidade" placeholder="Cidade" hasError={!!errors.city} {...register('city')} />
          {errors.city && <span className="error">{errors.city.message}</span>}
        </div>
        <div>
          <TextField label="Estado" placeholder="Estado" hasError={!!errors.state} {...register('state')} />
          {errors.state && <span className="error">{errors.state.message}</span>}
        </div>
        <div>
          <TextField
            label="Código Postal"
            placeholder="Código Postal"
            hasError={!!errors.postalCode}
            {...register('postalCode')}
            onChange={(e) => {
              const formattedValue = formatPostalCode(e.target.value);
              setValue('postalCode', formattedValue);
            }}
          />
          {errors.postalCode && <span className="error">{errors.postalCode.message}</span>}
        </div>
        <div>
          <TextField label="País" placeholder="País" hasError={!!errors.country} {...register('country')} />
          {errors.country && <span className="error">{errors.country.message}</span>}
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
          <TextField label="Taxa" placeholder="Taxa" hasError={!!errors.taxPercentage} {...register('taxPercentage')} />
          {errors.taxPercentage && <span className="error">{errors.taxPercentage.message}</span>}
        </div>
      </ContentNewOrganization>

      <ButtonContainer>
        <Button color="primary" label="Criar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
    </ContainerNewOrganization>
  );
};
