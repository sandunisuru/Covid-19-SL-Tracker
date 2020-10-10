import Home from '../components/Home';
import AddNews from '../components/AddNews';
import About from '../components/About';


export const getAllRoutes = () => {

    return [
        {
            path: '/',
            exact: true,
            component: Home
        },
        {
            path: '/add',
            exact: true,
            component: AddNews
        },
        {
            path: '/about',
            exact: true,
            component: About
        },
    ]
}