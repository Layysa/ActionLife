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
                <S.MenuItem href="/">Home</S.MenuItem>
                <S.MenuItem href="/about">About</S.MenuItem>
                <S.MenuItem href="/services">Services</S.MenuItem>
                <S.MenuItem href="/contact">Contact</S.MenuItem>
            </S.Menu>
        </S.Nav>
    );
};

export default Navbar;
