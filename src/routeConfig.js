import MovieDetails from './components/Header/MovieDetails/MovieDetails';
import SearchForm from './components/Header/SearchForm/SearchForm';
import DetailsBar from './components/Header/DetailsBar/DetailsBar';

const routes = [
    {
        path: '/search',
        component: SearchForm,
        name: 'SearchForm'
    },
    {
        path: '/film',
        component: MovieDetails,
        name: 'MovieDetails'
    },
    {
        path: '/film',
        component: DetailsBar,
        name: 'DetailsBar'
    }
];

export default routes;