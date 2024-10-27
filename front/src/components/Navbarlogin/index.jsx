import React from 'react';
import * as S from './styles';

import logo from '../../assets/svg/logo.svg';
import profileIcon from '../../assets/svg/perfil.svg'; // Importe o ícone de perfil aqui

const Navbarlogin = () => {
    return (
        <S.Nav>
            <S.Logo>
                <img src={logo} alt="Logo" />
            </S.Logo>
            <S.Menu>
                <S.MenuItem href="/Homelogin">Início</S.MenuItem>
                <S.MenuItem href="/About">Sobre Nós</S.MenuItem>
                <S.MenuItem href="/Chatbotlogin">ACT</S.MenuItem>
            </S.Menu>
            <S.ProfileButton href="/perfil">
                <img src={profileIcon} alt="Ícone de Perfil" />
            </S.ProfileButton>
        </S.Nav>
    );
};

export default Navbarlogin;
