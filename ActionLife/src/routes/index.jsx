import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home/index';
import Login from '../pages/Login/index';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);
