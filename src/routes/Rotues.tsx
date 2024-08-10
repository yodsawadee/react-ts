import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/main/MainPage';
import CategoryPage from '../pages/category/CategoryPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <MainPage /> },
            { path: "/category", element: <CategoryPage /> }
        ]
    }
])