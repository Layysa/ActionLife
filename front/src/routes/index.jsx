import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import About from '../pages/About/index'

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
]);
