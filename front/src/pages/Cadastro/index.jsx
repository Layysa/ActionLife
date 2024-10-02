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
  return (
    <Container>
      <WavesWrapper>
        <img src={waves} className='background' alt='' />
      </WavesWrapper>
      <FormWrapper>
        <Logo>
          <img src={logo} className='background' alt='' />
        </Logo>
        <Form>
          <Title>Cadastro</Title>
          <Input type="text" placeholder="Nome completo:" />
          <Input type="email" placeholder="E-mail:" />
          <Input type="password" placeholder="Senha:" />
          <Input type="password" placeholder="Confirmar senha:" />
          <Input type="text" placeholder="Data de nascimento: dd/mm/aaaa" />
          <Button>Cadastrar</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
