import styled from 'styled-components';

// Estilos para o container principal
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #353535;
  z-index: 2; /* Garante que o conteúdo fique à frente das ondas */
  position: relative; /* Adicionado para que o z-index funcione corretamente */
`;

// Estilos para o formulário
export const Form = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3; /* Para garantir que o formulário fique à frente */
  position: relative; /* Adicionado para garantir que respeite o z-index */
`;

// Estilos para o título
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #000;
`;

// Estilos para os inputs
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #635de0;
  }
`;

// Estilos para os selecionadores
export const Select = styled.select`
 width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #635de0;
  }
`;

export const Option = styled.option`
width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #635de0;
  }
`;

// Estilos para o botão
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #7a45f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5b33c2;
  }
`;

// Estilos para o logo
export const Logo = styled.div`
  position: absolute;
  top: 0;
  text-align: center;

  h1 {
    color: #fff;
    font-family: 'Arial', sans-serif;
    font-size: 24px;
  }
`;

export const Waves = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1; /* Coloca as ondas atrás de todos os outros elementos */
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
  }
`;
