import { zodResolver } from '@hookform/resolvers/zod';
import { notification } from 'antd';
import { FC, Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '~/components/Button';
import AccountModel from '~/services/api/accounts/Account';
import AccountService from '~/services/api/accounts/AccountService';
import { ButtonContainer, ContainerNewAccount, ContentNewAccount } from '../style';
import { TextField } from '~/components/TextField';

const schema = z.object({
  name: z.string().min(3, 'Deve ter no mínimo 3 caracteres'),
  workload: z.string().min(1, 'É obrigatório'),
});

export const NewAccount: FC = () => {
  const [loading, setLoading] = useState(false);
  const service = new AccountService();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formDataAccount: Partial<AccountModel>) => {
    setLoading(true);
    try {
      const response = await service.create(formDataAccount as AccountModel);
      if (response.isSuccess) {
        notification.success({
          message: 'Conta criada com sucesso!',
        });
        navigate('/accounts');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao criar conta',
        description: error.response?.data?.message || 'Erro desconhecido ao criar conta',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <ContainerNewAccount>
        <ContentNewAccount onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField label="Nome" placeholder="Nome" hasError={!!errors.name} {...register('name')} />
            {errors.name && typeof errors.name.message === 'string' && (
              <span className="error">{errors.name.message}</span>
            )}
          </div>
          <div>
            <TextField
              label="Carga de Trabalho"
              placeholder="Carga de trabalho"
              type="number"
              hasError={!!errors.workload}
              {...register('workload')}
            />
            {errors.workload && typeof errors.workload.message === 'string' && (
              <span className="error">{errors.workload.message}</span>
            )}
          </div>
        </ContentNewAccount>
        <ButtonContainer>
          <Button color="primary" label="Criar" loading={loading} onClick={handleSubmit(onSubmit)} />
        </ButtonContainer>
      </ContainerNewAccount>
    </Fragment>
  );
};
