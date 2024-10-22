import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import * as S from './styles';

import waves from '../../assets/svg/waves.svg';
import logo from '../../assets/svg/logo.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Usando useNavigate

    const handleLogin = (e) => {
        e.preventDefault();
        // Lógica de autenticação
        console.log('Login realizado:', email, password);

        // Aqui você deve implementar sua lógica de autenticação
        // Se o login for bem-sucedido, redirecione
        navigate('/Homelogin'); // Redireciona para a página desejada
    };

    return (
        <S.telalogin>
            <S.logologin>
                <img src={logo} className="background" alt="" />
            </S.logologin>
            <S.AsideContainer>
                <img src={waves} className="backgroud" alt="" />
            </S.AsideContainer>
            <S.LoginContainer>
                <S.Form onSubmit={handleLogin}>
                    <S.Title>Login</S.Title>
                    <S.Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <S.Label>
                        <S.Checkbox type="checkbox" />
                        Lembre-se
                    </S.Label>
                    <S.Button type="submit">Entrar</S.Button>{' '}
                    {/* Mudança aqui */}
                    <S.LinkText href="/Cadastro">
                        Não possui conta? Cadastre-se
                    </S.LinkText>
                </S.Form>
            </S.LoginContainer>
        </S.telalogin>
    );
};

export default Login;
