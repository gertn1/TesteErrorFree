import { notification } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '~/components/Button';
import { TextField } from '~/components/TextField';
import AccountModel from '~/services/api/accounts/Account';
import AccountService from '~/services/api/accounts/AccountService';
import { ButtonContainer, ContainerNewAccount, ContentNewAccount } from '../style';

export const EditAccount: FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const prevState = location.state;

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    fillFields();
  }, []);

  const accountService = new AccountService();
  const navigate = useNavigate();

  const fillFields = () => {
    setValue('name', prevState.account.name);
    setValue('workload', prevState.account.workload);
  };

  const onSubmit = async (formDataAccount: Partial<AccountModel>) => {
    setLoading(true);
    try {
      const updatedData = { ...prevState.account, ...formDataAccount };
      const response = await accountService.update(updatedData as AccountModel);
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

  const handleCancel = () => {
    navigate('/accounts');
  };

  return (
    <ContainerNewAccount>
      <ContentNewAccount onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField label="Nome" placeholder="Nome" {...register('name')} />
        </div>
        <div>
          <TextField label="Carga de Trabalho" placeholder="Carga de trabalho" {...register('workload')} />
        </div>
      </ContentNewAccount>
      <ButtonContainer>
        <Button color="primary" label="Salvar" loading={loading} onClick={handleSubmit(onSubmit)} />

        <Button color="primary" label="Cancelar" loading={loading} onClick={handleCancel} />
      </ButtonContainer>
    </ContainerNewAccount>
  );
};
