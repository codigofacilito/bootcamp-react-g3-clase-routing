import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from '../views/Homepage';
import Login from '../views/Login';
import PrivateRoute from '../components/PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: (
            <PrivateRoute>
                <Homepage />
            </PrivateRoute>
        )
    }, 
    {
        path: '/auth',
        element: <Login />
    }
]);

const Router = () => <RouterProvider router={routes} />;

export default Router;