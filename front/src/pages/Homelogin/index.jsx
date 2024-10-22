import React from 'react';
import * as S from './styles';

import iniciohome from '../../assets/svg/iniciohome.svg';
import parteroxa from '../../assets/svg/parteroxa.svg';
import caixas from '../../assets/svg/caixas.svg';

import Navbarlogin from '../../components/Navbarlogin';

export default function Homelogin() {
    return (
        <S.Pai>
            <Navbarlogin />
            <S.InicioHomeImage src={iniciohome} alt="Início Home" />
            <S.Parteroxa src={parteroxa} alt="" />
            <S.Caixainicio src={caixas} alt="" />
        </S.Pai>
    );
}
