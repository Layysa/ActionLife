import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: #2b2b2b;
    color: white;
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const Menu = styled.div`
    display: flex;
    gap: 16px;
    margin-right: 20px;
`;

export const MenuItem = styled.a`
    text-decoration: none;
    color: white;
    font-size: 18px;

    &:hover {
        color: #7b44e9;
    }
`;
