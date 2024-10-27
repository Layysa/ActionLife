import React, { useState } from 'react';
import * as S from './styles'; // Importando os estilos como S
import logoP from '../../assets/svg/logoP.svg';
import Navbar from '../../components/Navbar';

// Componente de mensagem (usuário e ACT)
const Message = ({ sender, text }) => (
    <S.MessageContainer sender={sender}>
        <S.MessageSender>{sender === 'Você' ? 'Você' : 'ACT'}:</S.MessageSender>
        <S.MessageText>
            {Array.isArray(text)
                ? text.map((line, index) => <div key={index}>{line}</div>)
                : text}
        </S.MessageText>
    </S.MessageContainer>
);

const Chatbot = () => {
    const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens
    const [inputValue, setInputValue] = useState(''); // Estado do input do usuário

    // Função para definir respostas do ACT
    const getACTResponse = (userMessage) => {
        if (userMessage.toLowerCase().includes('olá')) {
            return [
                'Olá, tudo bem?',
                'Sou ACT e estou aqui para te ajudar a ter uma vida mais saudável. Como posso te ajudar hoje?',
            ];
        } else if (
            userMessage
                .toLowerCase()
                .includes('quero melhorar minha alimentação')
        ) {
            return [
                'Perfeito! Fico feliz que queira ser mais saudável.',
                'Agora me fale o que você come nas três refeições.',
            ];
        } else if (
            userMessage
                .toLowerCase()
                .includes(
                    'café da manhã como um pão com mortadela,no almoço como feijão,arroz e carne e no jantar como sopa de feijão'
                )
        ) {
            return [
                'Entendo. Agora para que eu possa compreender o seu objetivo, me diga sua altura e peso.',
            ];
        } else if (
            userMessage
                .toLowerCase()
                .includes(
                    'meu peso é 69 e minha altura é 1.81 e quero ganhar peso'
                )
        ) {
            return [
                'Seu IMC está ótimo! Seu IMC é de aproximadamente 21,06, que se encontra dentro da faixa de peso normal.',
                '',
                'Aqui estão três sugestões de receitas simples e nutritivas para o café da manhã, almoço e jantar, focadas em ganhar massa muscular:',
                '',
                '---',
                'Café da Manhã: Panqueca de Aveia e Banana',
                'Ingredientes:',
                '• 1 banana madura',
                '• 2 ovos',
                '• 3 colheres de sopa de aveia em flocos',
                '• 1 colher de chá de canela (opcional)',
                '• 1 colher de sopa de mel (opcional)',
                '',
                'Modo de Preparo:',
                '1. Amasse a banana em uma tigela.',
                '2. Adicione os ovos e a aveia, misturando bem.',
                '3. Aqueça uma frigideira untada e despeje pequenas porções da massa, formando panquecas.',
                '4. Cozinhe por 2 a 3 minutos de cada lado, até dourar.',
                '5. Sirva com mel ou frutas se desejar.',
                '',
                '---',
                'Almoço: Frango Grelhado com Quinoa e Legumes',
                'Ingredientes:',
                '• 150g de peito de frango',
                '• 1/2 xícara de quinoa',
                '• 1 cenoura pequena',
                '• 1 abobrinha pequena',
                '• 1 colher de chá de azeite',
                '• Sal e temperos a gosto (pimenta, alho, limão)',
                '',
                'Modo de Preparo:',
                '1. Tempere o peito de frango com sal, limão e temperos a gosto.',
                '2. Cozinhe a quinoa em água com uma pitada de sal até ficar macia.',
                '3. Corte a cenoura e a abobrinha em cubos pequenos e refogue com azeite até dourarem.',
                '4. Grelhe o frango em uma frigideira até cozinhar por completo.',
                '5. Sirva o frango com a quinoa e os legumes refogados.',
                '',
                '---',
                'Jantar: Salmão Assado com Batata Doce e Espinafre',
                'Ingredientes:',
                '• 150g de filé de salmão',
                '• 1 batata doce média',
                '• 1 xícara de espinafre fresco',
                '• 1 colher de chá de azeite',
                '• Sal e temperos a gosto (limão, pimenta, alho)',
                '',
                'Modo de Preparo:',
                '1. Tempere o salmão com limão, sal e pimenta.',
                '2. Corte a batata-doce em rodelas finas e asse no forno por 25 minutos a 180ºC.',
                '3. Coloque o salmão no forno nos últimos 15 minutos para assar junto.',
                '4. Enquanto isso, refogue o espinafre rapidamente com azeite e alho.',
                '5. Sirva o salmão com a batata-doce assada e o espinafre refogado.',
                '---',
                'Fazendo isso você conseguira atingir seu objetivo! Espero ter ajudado. Se tiver qualquer duvida é so falar.',
            ];
        } else if (userMessage.toLowerCase().includes('obrigado act')) {
            return ['De nada! fico feliz em ajudar.'];
        } else {
            return ['Desculpe, não entendi.', 'Pode reformular a pergunta?'];
        }
    };

    // Função de envio de mensagem
    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            const userMessage = inputValue.trim();
            setMessages([...messages, { sender: 'Você', text: userMessage }]); // Adiciona mensagem do usuário
            const actMessage = getACTResponse(userMessage);
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'ACT', text: actMessage },
                ]); // Resposta do ACT
            }, 1000); // Delay de 1 segundo para simular resposta do ACT
            setInputValue(''); // Limpa o input após o envio
        }
    };

    return (
        <>
            <Navbar />
            <S.ChatbotContainer>
                <S.Sidebar>
                    <S.SidebarSection>
                        <S.SidebarTitle>Hoje</S.SidebarTitle>
                        <S.SidebarMessage>
                            Quantas calorias posso ganhar por dia?
                        </S.SidebarMessage>
                        <S.SidebarMessage>
                            Receitas para um café da manhã saudável
                        </S.SidebarMessage>
                    </S.SidebarSection>
                    <S.SidebarSection>
                        <S.SidebarTitle>Ontem</S.SidebarTitle>
                        <S.SidebarMessage>
                            Como calcular a quantidade de água ideal?
                        </S.SidebarMessage>
                        <S.SidebarMessage>
                            Exercícios para perder gordura abdominal
                        </S.SidebarMessage>
                        <S.SidebarMessage>
                            Como calcular meu IMC?
                        </S.SidebarMessage>
                    </S.SidebarSection>
                </S.Sidebar>

                <S.ChatContent>
                    <S.ChatBox>
                        {messages.map((msg, index) => (
                            <Message
                                key={index}
                                sender={msg.sender}
                                text={msg.text}
                            />
                        ))}
                    </S.ChatBox>

                    <S.InputContainer>
                        <S.Input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Escreva aqui..."
                        />
                        <S.SendButton onClick={handleSendMessage}>
                            Enviar
                        </S.SendButton>
                    </S.InputContainer>
                </S.ChatContent>
            </S.ChatbotContainer>
        </>
    );
};

export default Chatbot;
