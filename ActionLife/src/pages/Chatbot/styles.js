import styled from 'styled-components';

export const ChatbotContainer = styled.div` // Background
  display: flex;
  height: 100vh;
  background-color: #1e1e1e; // Cor de fundo escura
  font-family: Arial, sans-serif;
`;

export const Sidebar = styled.div` // Barra lateral esquerda
  width: 300px;
  background-color: #333333; // Cor escura para a barra lateral
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); // Sombra mais escura
`;

export const SidebarSection = styled.div` // Espaçamento entre texto barra lateral
  margin-bottom: 40px;
`;

export const SidebarTitle = styled.h2` // Títulos
  color: #fff;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const SidebarMessage = styled.p` // Textos barra
  margin-bottom: 10px;
  font-size: 20px;
  color: #bfbfbf; // Cor cinza claro para texto
  line-height: 1.6;
`;

export const ChatContent = styled.div` // Elementos do chat
  flex: 1;
  background-color: #2a2a2a; // Fundo escuro para a área de chat
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
`;

export const ChatBox = styled.div`
  width: 15px 20px;
  margin-bottom: 780px;
  background-color: #3d3d3d; // Fundo da box do chat mais escuro
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); // Sombra escura
  color: #fff; // Texto branco na box de chat
`;

export const InputContainer = styled.div` // Contêiner do input e botão
  display: flex;
  justify-content: center; // Centraliza o input e o botão
  align-items: flex-start; // Alinha o botão ao topo da caixa de texto
  padding: 15px;
  background-color: #1e1e1e;
  border-top: 1px solid #555; // Borda sutil entre a área de texto e o chat
`;

export const Input = styled.input` // Input (caixa de texto)
  width: 700px; // Caixa de texto com 700px da largura
  padding: 10px;
  background-color: #333;
  color: #fff; // Texto branco
  border: 1px solid #555;
  border-radius: 20px;
  font-size: 16px;
  outline: none;
  margin-right: 10px;

  &::placeholder {
    color: #aaa; // Placeholder mais claro
  }
`;

export const SendButton = styled.button` // Botão de envio
  padding: 10px 15px; // Ajuste de padding para manter o botão pequeno
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: center; // Move o botão um pouco para o topo
  transition: background-color 0.3s;

  &:hover {
    background-color: #5952e1;
  }
`;
