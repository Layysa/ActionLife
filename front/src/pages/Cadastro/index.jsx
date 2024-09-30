import React from 'react';
import { 
  Container, 
  FormWrapper, 
  Logo, 
  Form, 
  Input, 
  Button, 
  Title 
} from './styles';

const Register = () => {
  return (
    <Container>
      <FormWrapper>
        <Logo>Action Life</Logo>
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