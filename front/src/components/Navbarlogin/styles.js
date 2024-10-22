import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 280px;
    background-color: #2b2b2b;
    color: white;
`;

export const Logo = styled.div`
    font-size: 2px;
    font-weight: bold;
    margin-left: 20px;
`;

export const Menu = styled.div`
    display: flex;
    gap: 10px;
    margin-right: 80px;
`;

export const MenuItem = styled.a`
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin-left: 80px;

    &:hover {
        color: #7b44e9;
    }
`;

export const ProfileButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; /* Ajuste o tamanho conforme necessário */
    height: 40px; /* Ajuste o tamanho conforme necessário */

    img {
        width: 100%; /* Ajuste para que o ícone se encaixe no botão */
        height: auto;
        color: #7b44e9;
    }
`;
