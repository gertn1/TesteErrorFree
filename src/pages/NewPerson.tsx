// import React, { useState } from 'react';
// import {ButtonContainer, ContentButtonPerson, ContentNewOrganization, TitlePerson} from "~/pages/person/style.ts";
// import {newPersonContainer} from "~/pages/organizations/style.ts";
//
// interface FormData {
//     cpfCnpj: string;
//     nome: string;
//     email: string;
//     telefone: string;
//     taxa: string;
//     idEmpresa: string;
// }
//
// const NewPerson: React.FC = () => {
//     const [formData, setFormData] = useState<FormData>({
//         cpfCnpj: '',
//         nome: '',
//         email: '',
//         telefone: '',
//         taxa: '',
//         idEmpresa: '',
//     });
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Aqui você pode enviar os dados do formulário para o servidor
//         console.log('Dados do formulário:', formData);
//         // Resetar o formulário após o envio
//         setFormData({
//             cpfCnpj: '',
//             nome: '',
//             email: '',
//             telefone: '',
//             taxa: '',
//             idEmpresa: '',
//         });
//     };
//
//     // @ts-ignore
//     return (
//
//         <div>
//             <TitlePerson>
//          Cadastro de Usuário
//             </TitlePerson>
//
//
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>CPF/CNPJ:</label>
//                     <input type="text" name="cpfCnpj" value={formData.cpfCnpj} onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label>Nome:</label>
//                     <input type="text" name="nome" value={formData.nome} onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label>Telefone:</label>
//                     <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label>Taxa:</label>
//                     <input type="text" name="taxa" value={formData.taxa} onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label>ID Empresa:</label>
//                     <input type="text" name="idEmpresa" value={formData.idEmpresa} onChange={handleChange}/>
//                 </div>
//
//                 <ButtonContainer>Cadastrar Usuário</ButtonContainer>
//             </form>
//
//         </div>
//     );
// };
//
// export default NewPerson;
//

import React, { useState } from 'react';

import {Button, Container, InputWrapper, Label, Input, Form} from "~/pages/person/style.ts";

interface FormData {
    cpfCnpj: string;
    nome: string;
    email: string;
    telefone: string;
    taxa: string;
    idEmpresa: string;
}

const CadastroUsuario: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        cpfCnpj: '',
        nome: '',
        email: '',
        telefone: '',
        taxa: '',
        idEmpresa: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode enviar os dados do formulário para o servidor
        console.log('Dados do formulário:', formData);
        // Resetar o formulário após o envio
        setFormData({
            cpfCnpj: '',
            nome: '',
            email: '',
            telefone: '',
            taxa: '',
            idEmpresa: '',
        });
    };


    return (
        <Container>
            <h2>Cadastro de Usuário</h2>
            <Form onSubmit={handleSubmit}>
                <InputWrapper>
                    <Label>CPF/CNPJ:</Label>
                    <InputWrapper type="text" name="cpfCnpj" value={formData.cpfCnpj} onChange={handleChange} />
                </InputWrapper>
                <InputWrapper>
                    <Label>Nome:</Label>
                    <Input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                </InputWrapper>
                <InputWrapper>
                    <Label>Email:</Label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                </InputWrapper>
                <InputWrapper>
                    <Label>Telefone:</Label>
                    <Input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
                </InputWrapper>
                <InputWrapper>
                    <Label>Taxa:</Label>
                    <Input type="text" name="taxa" value={formData.taxa} onChange={handleChange} />
                </InputWrapper>
                <InputWrapper>
                    <Label>ID Empresa:</Label>
                    <Input type="text" name="idEmpresa" value={formData.idEmpresa} onChange={handleChange} />
                </InputWrapper>
                <Button type="submit">Cadastrar Usuário</Button>
            </Form>
        </Container>
    );
};

export default CadastroUsuario;
