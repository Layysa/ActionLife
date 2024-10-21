import React, { useState } from 'react';
import { Container, Form, Input, Button, Select, Option, Title, Logo, Waves } from './styles';

import logo from '../../assets/svg/logo.svg';
import waves from '../../assets/svg/waves.svg';
import api from '../../api';

function App() {
  // Estados para controlar os inputs
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [profissao, setProfissao] = useState('');
  const [objetivo, setObjetivo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ sexo, peso, altura, profissao, objetivo });

    // Resetar os campos
    setSexo('');
    setPeso('');
    setAltura('');
    setProfissao('');
    setObjetivo('');
    alert('Informações enviadas com sucesso!');
  };

  return (
    <Container>
      <Logo>
        <img src={logo} className="background" alt="Logo" />
      </Logo>
      <Waves>
        <img src={waves} className="background" alt="Ondas" />
      </Waves>

      <Form onSubmit={handleSubmit}>
        <Title>Informações</Title>

        <Input 
          type="number" 
          placeholder="Peso:" 
          value={peso} 
          onChange={(e) => setPeso(e.target.value)} 
          required 
        />
        
        <Input 
          type="number" 
          placeholder="Altura:" 
          value={altura} 
          onChange={(e) => setAltura(e.target.value)} 
          required 
        />
        
        <Input 
          type="text" 
          placeholder="Profissão:" 
          value={profissao} 
          onChange={(e) => setProfissao(e.target.value)} 
          required 
        />
        
        <Select value={objetivo} onChange={(e) => setObjetivo(e.target.value)} required>
          <Option value="">Objetivo</Option>
          <Option value="Emagrecimento">Emagrecimento</Option>
          <Option value="Ganhar Massa Muscular">Ganhar Massa Muscular</Option>
          <Option value="Ganho de peso">Ganhar peso</Option>
          <Option value="Condicionamento físico">Condicionamento físico</Option>
          <Option value="Reabilitação">Reabilitação</Option>
          <Option value="Manter a saúde">Manter a saúde</Option>
        </Select>

        <Button type="submit">Continuar</Button>
      </Form>
    </Container>
  );
}

export default App;
