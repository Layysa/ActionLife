import React, { useState } from 'react';
import * as S from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Lógica de autenticação
        console.log('Login realizado:', email, password);
    };

    return (
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
                <S.Button type="submit">Entrar</S.Button>
                <S.LinkText>Não possui conta? Cadastre-se</S.LinkText>
            </S.Form>
        </S.LoginContainer>
    );
};

export default Login;