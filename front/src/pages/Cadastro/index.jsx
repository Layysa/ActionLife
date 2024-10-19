import { useState } from 'react';
import api from '../../api'
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


import logo from '../../assets/svg/logo.svg'
import waves from '../../assets/svg/waves.svg'

const Register = () => {

  // Estados do formulário
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [nascimento, setDate] = useState('');

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
      console.log({ nome, email, nascimento, senha: password });

      // Enviar os dados para a API
      const response = await api.post('/insertitem', {
          nome,
          email,
          nascimento,
          senha: password, // envio de senha
      });
      
      console.log('Resposta da API:', response); // Log da resposta da API
      alert('Cadastro realizado com sucesso!');
  } catch (error) {
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
          <Input type="password" placeholder="Senha:" autocomplete="new-password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
          <Input type="password" placeholder="Confirmar senha:" autocomplete="new-password" value={confirmpassword}  required onChange={(e) => setConfirmpassword(e.target.value)} />
          <Input type="date" placeholder="Data de nascimento: dd/mm/aaaa" value={nascimento}  required onChange={(e) => setDate(e.target.value)}/>
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
