import React from 'react';
import * as S from './styles'; // Importando os estilos como S

const Chatbot = () => {
  return (
    <S.ChatbotContainer>
      <S.Sidebar>
        <S.SidebarSection>
          <S.SidebarTitle>Hoje</S.SidebarTitle>
          <S.SidebarMessage>Tomei leite estragado ontem e minhas fezes estão estranhas. O que faço?</S.SidebarMessage>
          <S.SidebarMessage>Receitas para um café da manhã reforçado.</S.SidebarMessage>
        </S.SidebarSection>

        <S.SidebarSection>
          <S.SidebarTitle>Ontem</S.SidebarTitle>
          <S.SidebarMessage>PREGUNTA 3</S.SidebarMessage>
          <S.SidebarMessage>PREGUNTA 4</S.SidebarMessage>
          <S.SidebarMessage>PREGUNTA 5</S.SidebarMessage>
          <S.SidebarMessage>PERGUNTA 6</S.SidebarMessage>
        </S.SidebarSection>
      </S.Sidebar>

      <S.ChatContent>
        <S.ChatBox>
          <img src="chat-icon-placeholder.png" alt="Chat Icon" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        </S.ChatBox>
        <S.InputContainer>
          <S.Input type="text" placeholder="Escreva aqui..." />
          <S.SendButton><p> </p></S.SendButton>
        </S.InputContainer>
      </S.ChatContent>
    </S.ChatbotContainer>
  );
};

export default Chatbot;
