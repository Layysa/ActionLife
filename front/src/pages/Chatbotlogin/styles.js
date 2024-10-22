import styled from 'styled-components';

export const ChatbotContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: #1e1e1e;
    font-family: Arial, sans-serif;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
`;

export const Sidebar = styled.div`
    width: 300px;
    background-color: #333333;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
`;

export const SidebarSection = styled.div`
    margin-bottom: 40px;
`;

export const SidebarTitle = styled.h2`
    color: #fff;
    font-size: 14px;
    margin-bottom: 15px;
`;

export const SidebarMessage = styled.p`
    margin-bottom: 10px;
    font-size: 16px;
    color: #bfbfbf;
    line-height: 1.6;
`;

export const ChatContent = styled.div`
    flex: 1;
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    overflow-y: auto;
`;

export const ChatBox = styled.div`
    flex: 1;
    width: 100%;
    padding: 15px;
    overflow-y: auto;
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: ${(props) =>
        props.sender === 'Você' ? 'flex-end' : 'flex-start'};
`;

export const MessageSender = styled.span`
    font-weight: bold;
    color: ${(props) => (props.sender === 'Você' ? '#6c63ff' : '#6c63ff')};
`;

export const MessageText = styled.p`
    background-color: ${(props) =>
        props.sender === 'Você' ? '#6c63ff' : '#333'};
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    max-width: 60%;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    width: 100%;
`;

export const Input = styled.input`
    flex: 1;
    padding: 15px;
    background-color: #333;
    color: #fff;
    border: 1px solid #555;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    margin-right: 10px;

    &::placeholder {
        color: #aaa;
    }
`;

export const SendButton = styled.button`
    padding: 10px 15px;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #5952e1;
    }
`;
