import React from 'react';
import * as S from './styles'; // Importando os estilos como S

const Chatbot = () => {
  return (
    <S.ChatbotContainer>
      <S.Sidebar>
        <S.SidebarSection>
          <S.SidebarTitle>Hoje</S.SidebarTitle>
          <S.SidebarMessage>Quantas calorias posso ganhar por dia?</S.SidebarMessage>
          <S.SidebarMessage>Receitas para um café da manhã reforçado e com poucas KL</S.SidebarMessage>
        </S.SidebarSection>

        <S.SidebarSection>
          <S.SidebarTitle>Ontem</S.SidebarTitle>
          <S.SidebarMessage>Como saber a quatia de água em litros para 50kg?</S.SidebarMessage>
          <S.SidebarMessage>Exercício tira bucho</S.SidebarMessage>
          <S.SidebarMessage>Dieta detox</S.SidebarMessage>
          <S.SidebarMessage>Tenho 1,65 e peso 78,300kg, calcule o meu IMC</S.SidebarMessage>
        </S.SidebarSection>
      </S.Sidebar>

      <S.ChatContent>
        <S.ChatBox>
          <img src="chat-icon-placeholder.png" alt="Chat Icon" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        </S.ChatBox>
        <S.InputContainer>
          <S.Input type="text" placeholder="Escreva aqui..." />
          <S.SendButton><p>Enviar</p></S.SendButton>
        </S.InputContainer>
      </S.ChatContent>
    </S.ChatbotContainer>
  );
};