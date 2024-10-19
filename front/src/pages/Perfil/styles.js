import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
`;

export const Sidebar = styled.div`
  width: 300px;
  background-color: #6b47cb;
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  text-align: center;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  h2 {
    margin: 15px 0;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #6b47cb;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const GraphSection = styled.div`
  background-color: #2a2a2a;
  padding: 20px;
  margin-top: 110px;
  margin-left: 160px;
  border-radius: 10px;
  width: 35%; /* Igual ao CalendarSection */
  text-align: center;

  .chart-placeholder {
    height: 200px;
    background-color: #3a3a3a;
    border-radius: 10px;
  }
`;

export const CalendarSection = styled.div`
  background-color: #2a2a2a;
  padding: 20px;
  margin-top: 110px;
  margin-right: 160px;
  border-radius: 10px;
  width: 35%; /* Mantém o mesmo tamanho do GraphSection */
  text-align: center;

  .calendar-placeholder {
    height: 200px;
    background-color: #3a3a3a;
    border-radius: 10px;
  }
`;

export const DietSection = styled.div`
  background-color: #2a2a2a;
  margin-top: 110px;
  margin-left: 160px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  height: 280px;

  p {
    color: #aaa;
    margin-top: 100px;
  }
`;
