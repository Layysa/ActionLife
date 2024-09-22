import styled from 'styled-components';

export const ChatbotContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1e1e1e;
`;

export const Sidebar = styled.div`
  width: 300px;
  background-color: #111;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const SidebarSection = styled.div`
  margin-bottom: 40px;
`;

export const SidebarTitle = styled.h2`
  color: #888;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SidebarMessage = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: #ccc;
  line-height: 1.5;
`;

export const ChatContent = styled.div`
  flex: 1;
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChatBox = styled.div`
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 900px;
  display: flex;
  padding: 20px;
  background-color: #2e2e2e;
`;

export const Input = styled.input`
  flex: 1;
  padding: 23px;
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 16px;
  outline: none;
`;

export const SendButton = styled.button`
  margin-left: 800px;
  margin-top: 15px;
  position: absolute;
  padding: 15px;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #5952e1;
  }
`;
