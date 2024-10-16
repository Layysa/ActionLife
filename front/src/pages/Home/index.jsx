import React from 'react';
import * as S from './styles'; // Importando os estilos

import iniciohome from '../../assets/svg/iniciohome.svg';
import parteroxa from '../../assets/svg/parteroxa.svg';
import caixas from '../../assets/svg/caixas.svg';

import Navbar from '../../components/Navbar';

export default function Home() {
    return (
        <S.Pai>
            <Navbar />
            <S.InicioHomeImage src={iniciohome} alt="Início Home" />
            <S.Parteroxa src={parteroxa} alt="" />
            <S.Caixainicio src={caixas} alt="" />
        </S.Pai>
    );
}
