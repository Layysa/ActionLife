import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f5;
`;

export const Form = styled.form`
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    margin-bottom: 2rem;
    text-align: center;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const Checkbox = styled.input``;

export const Button = styled.button`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #6c5ce7;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #5a51e6;
    }
`;

export const LinkText = styled.p`
    text-align: center;
    color: #333;
    margin-top: 1rem;
`;
