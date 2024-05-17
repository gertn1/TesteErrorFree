import { z } from "zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PartnerService from "~/services/api/partners/PartnerService.ts";
import { useNavigate } from "react-router-dom";
import Partner from "~/services/api/partners/Partner.ts";
import notification from "antd/es/notification";
import { TextFieldForm } from "~/pages/person/TextFieldForm";
import { StyledLabel } from "~/pages/person/TextFieldForm/style.ts";
import Button from "~/components/Button";
import { formatCNPJ, formatPhone } from "~/commons/helpers/formatUtils";
import {
  ButtonContainerPerson,
  ContainerNewPartnerPerson,
  ContentNewPartnerPerson,
  TitlePerson
} from "~/pages/person/style.ts";

const schema = z.object({
  name: z.string().min(3, 'Deve ter no mínimo 3 caracteres'),
  description: z.string().min(1, 'É obrigatório'),
  registrationNumber: z.string().min(1, 'É obrigatório'),
  email: z.string().email('E-mail inválido').min(1, 'É obrigatório'),
  phone: z.string().min(1, 'é obrigatório'),
  companyId: z.string().min(1, 'é obrigatório'),
});



export const Partners:FC =  () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({resolver: zodResolver(schema)});

  const partnerService = new PartnerService();

  const navigate = useNavigate();

  const onSubmit = async (formDataPartner:Partial<Partner>)=> {
    try{
      const response = await partnerService.create(formDataPartner as Partner);
      if(response.isSuccess){
        notification.success({
          message: 'Parceiro criado com sucesso!',
        });
        navigate('/partners');
      }
    }catch (error: any){
      notification.error({
        message: 'Erro ao criar parceiro',
        description: error.response?.data?.message || 'Erro desconhecido ao criar parceiro',
      });
    }finally {
      setLoading(false)
    }

  }


  return (
    <ContainerNewPartnerPerson>
      <TitlePerson>Cadastrar Usuário</TitlePerson>

      <ContentNewPartnerPerson onSubmit={handleSubmit(onSubmit)}>
        <div>
          <StyledLabel>Nome:</StyledLabel>
          <TextFieldForm
            placeholder="Nome"
            hasError={!!errors.name}
            {...register('name')} />
          {errors.name && typeof errors.name.message === 'string' && <span className="error">{errors.name.message}</span>}
        </div>
        <div>
          <StyledLabel>Descrição:</StyledLabel>
          <TextFieldForm
            placeholder="Descrição"
            hasError={!!errors.description}
            {...register('description')}
          />
        </div>
        <div>
          <StyledLabel>CNPJ:</StyledLabel>
          <TextFieldForm
            placeholder="CNPJ"
            hasError={!!errors.registrationNumber}
            {...register('registrationNumber')}
            onChange={(e) => {
              const formattedValue = formatCNPJ(e.target.value);
              setValue('registrationNumber', formattedValue);
            }}
          />
        </div>
        <div>
          <StyledLabel>E-mail: </StyledLabel>
          <TextFieldForm
            placeholder="E-mail"
            hasError={!!errors.email}
            {...register('email')} />
        </div>
        <div>
          <StyledLabel>Telefone:</StyledLabel>
          <TextFieldForm
            placeholder="Telefone"
            hasError={!!errors.phone}
            {...register('phone')}
            onChange={(e) => {
              const formattedValue = formatPhone(e.target.value);
              setValue('phone', formattedValue);
            }}
          />
        </div>
        <div>
          <StyledLabel>ID Empresa:</StyledLabel>
          <TextFieldForm
            placeholder="ID da Empresa"
            hasError={!!errors.companyId}
            {...register('companyId')}
          />
        </div>
        <ButtonContainerPerson>
          <Button
            color="terciary"
            label="Cadastrar Usuário"
            loading={loading}
            onClick={handleSubmit(onSubmit)} />
        </ButtonContainerPerson>
      </ContentNewPartnerPerson>
    </ContainerNewPartnerPerson>
  );
};
