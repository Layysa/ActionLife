import React from 'react';
import { 
  Container, Sidebar, Profile, GraphSection, CalendarSection, DietSection, LogoutButton, MainContent, TopSection 
} from './styles';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        <Profile>
          <img src="https://via.placeholder.com/150" alt="Profile" />
          <h2>Gabriel Teles</h2>
          <p><strong>Peso:</strong> 69.30 Kg</p>
          <p><strong>Altura:</strong> 1.80m</p>
          <p><strong>IMC:</strong> 21.39</p>
          <p><strong>Sexo:</strong> Masculino</p>
          <p><strong>Profissão:</strong> Desenvolvedor</p>
          <LogoutButton>Sair da conta</LogoutButton>
        </Profile>
      </Sidebar>
      <MainContent>
        <TopSection>
          <GraphSection>
            <h2>Gráfico</h2>
            <div className="chart-placeholder">Gráfico aqui</div>
          </GraphSection>
          <CalendarSection>
            <h2>Calendário</h2>
            <div className="calendar-placeholder">Calendário aqui</div>
          </CalendarSection>
        </TopSection>
        <DietSection>
          <h2>Dieta</h2>
          <p>Você ainda não possui uma dieta definida.</p>
        </DietSection>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
