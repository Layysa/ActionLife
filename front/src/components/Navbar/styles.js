import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    background-color: #2b2b2b;
    color: white;
`;

export const Logo = styled.div`
    font-size: 2px;
    font-weight: bold;
    margin-left: 200px;
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

// Novo estilo para o botão "Entrar"
export const EntrarButton = styled.a`
    text-decoration: none;
    color: white;
    font-size: 15px;
    margin-right: 260px;
    padding: 8px 20px;
    background-color: #7b44e9;
    border-radius: 15px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5a30b3;
    }
`;
