import React from 'react';
import * as S from './styles';
import Navbar from '../../components/Navbar';
import footerabout from '../../assets/svg/footerabout.svg';
export default function About() {
    return (
        <S.Container>
            <Navbar />
            <S.Content>
                <S.Title>Sobre a Action Life</S.Title>
                <S.Text>
                A Action Life é uma empresa dedicada a transformar a saúde e o bem-estar das pessoas por meio de soluções inovadoras e personalizadas. 
                Nosso objetivo é melhorar a qualidade de vida dos nossos clientes, oferecendo serviços que promovem a saúde física e uma alimentação 
                equilibrada, de forma prática e acessível.
                </S.Text>
                <S.Text>
                Entendemos que a saúde física é fundamental para uma vida plena e, por isso, oferecemos suporte completo, desde orientação nutricional 
                até planos de exercícios personalizados. Nossa equipe de especialistas desenvolve estratégias alimentares 
                que atendem a cada necessidade individual, ajudando cada pessoa a atingir seus objetivos de forma eficaz e sustentável.
                </S.Text>
                <S.Text>
                Além disso, o Action Life incorpora tecnologia de ponta por meio do seu chatbot interativo, projetado para responder dúvidas sobre nutrição,
                 bem-estar e saúde em geral, promovendo um acompanhamento contínuo e facilitando o acesso a informações de qualidade. 
                 Com o uso de algoritmos avançados, o chatbot é capaz de fornecer recomendações inteligentes e personalizadas, ajudando 
                 nossos usuários a estabelecer uma rotina mais saudável e equilibrada.
                </S.Text>
                <S.Text>
                    Escolha a Action Life como sua parceira nessa jornada de transformação da saúde física e mental, 
                    e alcance o equilíbrio que você merece para uma vida com mais energia, disposição e felicidade!
                </S.Text>
            </S.Content>
            <S.footerabout src={footerabout}/>  
        </S.Container>
    )
}