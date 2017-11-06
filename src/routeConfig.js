import MovieDetails from './components/Header/MovieDetails/MovieDetails';
import SearchForm from './components/Header/SearchForm/SearchForm';

const routes = [
    {
        path: '/search',
        component: SearchForm,
        name: 'SearchForm'
    },
    {
        path: '/film/:id',
        component: MovieDetails,
        name: 'MovieDetails'
    }
];

export default routes;