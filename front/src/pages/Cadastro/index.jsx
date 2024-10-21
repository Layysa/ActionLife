import { useState } from 'react';
import api from '../../api';
import React from 'react';
import {
  Container, 
  FormWrapper, 
  Logo, 
  Form, 
  Input, 
  Button, 
  Title,
  WavesWrapper
} from './styles';
import logo from '../../assets/svg/logo.svg';
import waves from '../../assets/svg/waves.svg';
//import * as yup from 'yup';

// Validação de cadastro
/*const validationRegister = yup.object().shape({
  email: yup
  .string()
  .email("E-mail inválido!")
  .required("O e-mail é obrigatório"),
  password: yup
  .string()
  .min(8, "A senha deve ter pelo menos 8 caracteres")
  .required("A senha é obrigatório"),

  confirmation: yup
  .string()
  .oneOf([yup.ref('password'), null], 'As senhas são diferentes')
  .required("A confirmação é obrigatória"),

})*/

const Register = () => {

  // Estados do formulário
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  
 // Função para tratar o envio do formulário
async function handleSubmit(e) {
  e.preventDefault();

  // Verificar se as senhas coincidem
  if (password !== confirmpassword) {
      alert('As senhas não coincidem!');
      return;
  }

  try {
      // Exibir os dados no console para verificação antes do envio
      console.log({ nome, email, senha: password });

      // Enviar os dados para a API
      const response = await api.post('/insertitem', {
          nome,
          email,
          senha: password, // envio de senha
      });

      setName('')
      setEmail('')
      setPassword('')
      setConfirmpassword('')
      
      console.log('Resposta da API:', response); // Log da resposta da API
      alert('Cadastro realizado com sucesso!');
  }catch (error) {
      console.error('Erro ao inserir dados', error);
      alert('Ocorreu um erro ao realizar o cadastro. Tente novamente.');
  }
}

  // Função para tratar o envio do formulário

  return (
    <Container>
      <WavesWrapper>
        <img src={waves} className='background' alt='' />
      </WavesWrapper>
      <FormWrapper>
          <Logo>
            <img src={logo} className='background' alt='' />
          </Logo>
        <form onSubmit={handleSubmit}>
          <Title>Cadastro</Title>
          <Input type="text" placeholder="Nome completo:" value={nome} required onChange={(e) => setName(e.target.value)}/>
          <Input type="email" placeholder="E-mail:" value={email} required onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="Senha:" autoComplete="new-password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
          <Input type="password" placeholder="Confirmar senha:" autoComplete="new-password" value={confirmpassword}  required onChange={(e) => setConfirmpassword(e.target.value)} />
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
