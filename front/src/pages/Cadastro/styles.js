import styled from 'styled-components';

// Container principal que cobre a tela inteira
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to top, #4c00c9, #271c71);
`;

// Estilo do Forms
export const Form = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 40px;
  width: 320px;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Wrapper do formulário
export const FormWrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 40px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Estilo para o logo 
export const Logo = styled.h1`
  font-size: 24px;
  color: #4c00c9;
  margin-bottom: 20px;
`;

// Título do formulário
export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
  color: #333;
`;

// Estilo dos inputs
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #4c00c9;
  }
`;

// Estilo do botão de cadastro
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6c00d6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4c00c9;
  }
`;