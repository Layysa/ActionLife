import React, { useState } from 'react';
import axios from 'axios'; // Importando axios
import * as S from './styles';

import waves from '../../assets/svg/waves.svg';
import logo from '../../assets/svg/logo.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagem de erro

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Enviar a requisição de login para o backend
            const response = await axios.post('http://localhost:3003/login', {
                email,
                password
            });

            // Se o login for bem-sucedido
            console.log('Login realizado:', response.data);
            // Aqui você pode redirecionar o usuário ou armazenar o token de autenticação

        } catch (error) {
            // Se ocorrer um erro, exiba a mensagem
            if (error.response) {
                // O servidor respondeu com um status diferente de 2xx
                setErrorMessage(error.response.data.msg || 'Erro ao fazer login');
            } else {
                setErrorMessage('Erro ao conectar ao servidor');
            }
        }
    };

    return (
        <S.telalogin>
            <S.logologin>
                <img src={logo} className="background" alt="" />
            </S.logologin>
            <S.AsideContainer>
                <img src={waves} className='backgroud' alt='' />
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
                    <S.Button type="submit">Entrar</S.Button>
                    {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>} {/* Exibe a mensagem de erro, se houver */}
                    <S.LinkText>Não possui conta? Cadastre-se</S.LinkText>
                </S.Form>
            </S.LoginContainer>
        </S.telalogin>
    );
};

export default Login;
