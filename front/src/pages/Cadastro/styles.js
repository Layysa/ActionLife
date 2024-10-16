import styled from 'styled-components';

// Container principal que cobre a tela inteira
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #353535;
  position: relative;
`;

// Estilo do Forms
export const Form = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 40px;
<<<<<<< HEAD
  width: 320px;
=======
  /* width: 320px; */
>>>>>>> 59304669cb1f7d5e2fdda100fe194e4c0c767ed1
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
  z-index: 2; /* Colocar o formulário à frente */
`;

// Estilo para o logo 
export const Logo = styled.div`
  position: absolute;
  top: 0%; 
  left: 50%;
  transform: translateX(-50%);
  img {
    width:default; 
  }
`;

// Estilo do WavesWrapper para ficar atrás
export const WavesWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1; /* Colocar as ondas atrás */
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
  }
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