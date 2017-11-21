import MovieDetails from './components/Header/MovieDetails/MovieDetails';
import SearchForm from './components/Header/SearchForm/SearchForm';
import App from './App';

const routes = [
    {
        path: '/',
        component: App,
        isExact: true,
        routes: [
            {
                path: '/search',
                component: SearchForm,
            },
            {
                path: '/film/:id',
                component: MovieDetails
            }
        ]
    }
];

export default routes;