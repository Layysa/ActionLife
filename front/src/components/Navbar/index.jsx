import React from 'react';
import * as S from './styles';

import logo from '../../assets/svg/logo.svg';

const Navbar = () => {
    return (
        <S.Nav>
            <S.Logo>
                <img src={logo} alt="Logo" />
            </S.Logo>
            <S.Menu>
                <S.MenuItem href="/">Inicio</S.MenuItem>
                <S.MenuItem href="/about">Sobre Nós</S.MenuItem>
                <S.MenuItem href="/services">Act</S.MenuItem>
            </S.Menu>
            <S.EntrarButton href="/login">Entrar</S.EntrarButton>
        </S.Nav>
    );
};

export default Navbar;
