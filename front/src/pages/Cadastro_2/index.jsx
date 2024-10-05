import React from 'react';
import { Container, Form, Input, Button, Title, Logo, Waves } from './styles';

import logo from '../../assets/svg/logo.svg';
import waves from '../../assets/svg/waves.svg';

function App() {
  return (
    <Container>
      <Logo>
        <img src={logo} className='background' alt='' />
      </Logo>
      <Waves>
        <img src={waves} className='background' alt='' />
      </Waves>
      <Form>
        <Title>Informações</Title>
        <Input type="text" placeholder="Sexo" />
        <Input type="text" placeholder="Peso" />
        <Input type="text" placeholder="Altura" />
        <Input type="text" placeholder="Profissão" />
        <Input type="text" placeholder="Objetivo" />
        <Button>Continuar</Button>
      </Form>
    </Container>
  );
}

export default App;
