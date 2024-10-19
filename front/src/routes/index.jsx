import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import About from '../pages/About/index';
import Chatbot from '../pages/Chatbot/index';
import Cadastro from '../pages/Cadastro/index';
import Cadastro_2 from '../pages/Cadastro_2/index';
import Perfil from '../pages/Perfil/index'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/About',
        element: <About />,
    },
    {
        path: '/Chatbot',
            element: <Chatbot />,
        },
    {
        path: '/Cadastro',
            element: <Cadastro />,
    },
    {
        path: '/Informações',
            element: <Cadastro_2/>,
    },
    {
        path: '/Perfil',
            element: <Perfil/>,
    }
]);
