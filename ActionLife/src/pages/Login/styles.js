import styled from 'styled-components';

export const telalogin = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const logologin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AsideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  margin-top: 150px;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 430px;
  margin-top: -100px;
  width: 300px;
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 260px;
  padding: 10px;
  margin: 8px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
  max-width: 260px;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 260px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 16px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;