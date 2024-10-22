import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { Container, Form, Input, Button, Title, Logo, Waves } from './styles';

import logo from '../../assets/svg/logo.svg';
import waves from '../../assets/svg/waves.svg';
import api from '../../api';

function App() {
    const navigate = useNavigate(); // Usando useNavigate

    const handleContinue = () => {
        // Lógica adicional se necessário
        navigate('/Homelogin'); // Redireciona para a página desejada
    };

    return (
        <Container>
            <Logo>
                <img src={logo} className="background" alt="" />
            </Logo>
            <Waves>
                <img src={waves} className="background" alt="" />
            </Waves>
            <Form>
                <Title>Informações</Title>
                <Input type="text" placeholder="Sexo" />
                <Input type="text" placeholder="Peso" />
                <Input type="text" placeholder="Altura" />
                <Input type="text" placeholder="Profissão" />
                <Input type="text" placeholder="Objetivo" />
                <Button type="button" onClick={handleContinue}>
                    Continuar
                </Button>{' '}
                {/* Mudança aqui */}
            </Form>
        </Container>
    );
}

export default App;
