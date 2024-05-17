import { z } from "zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PartnerService from "~/services/api/partners/PartnerService.ts";
import { useNavigate } from "react-router-dom";
import Partner from "~/services/api/partners/Partner.ts";
import notification from "antd/es/notification";
import {
  ButtonContainer,
  ContainerNewPartner,
  ContentNewPartner,
  ContentNewPartnerPerson
} from "~/pages/partners/style.ts";
import { TextField } from "~/components/TextField";
import { TextFieldForm } from "~/pages/person/TextFieldForm";
import { StyledLabel } from "~/pages/person/TextFieldForm/style.ts";
import Button from "~/components/Button";

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
    <ContainerNewPartner>
      <ContentNewPartnerPerson onSubmit={handleSubmit(onSubmit)}>
        <div>
          <StyledLabel>Nome</StyledLabel>
          <TextField placeholder="Nome" hasError={!!errors.name} {...register('name')} />
          {errors.name && typeof errors.name.message === 'string' &&
            <span className="error">{errors.name.message}</span>}
        </div>
        <div>
          <StyledLabel>CNPJ</StyledLabel>
          <TextField placeholder="Nome" hasError={!!errors.name} {...register('name')} />
          {errors.name && typeof errors.name.message === 'string' &&
            <span className="error">{errors.name.message}</span>}
        </div>

      </ContentNewPartnerPerson>
      <ButtonContainer>
        <Button color="" label="Criar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
    </ContainerNewPartner>
  );
};
