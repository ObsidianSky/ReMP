import React from 'react';
import './Header.scss'
import PropTypes from 'prop-types';
import TopBar from './TopBar/TopBar';
import SearchForm from './SearchForm/SearchForm';
import BottomBar from './BottomBar/BottomBar';
import MovieDetails from './MovieDetails/MovieDetails';

export default class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <div className="header__background">
                    <div className="header__shadow">
                        <div className="header__inner">
                            <div className="header__top-bar">
                                <TopBar/>
                            </div>
                            <div className="header__content">
                                {/*{this.props.activeMovie*/}
                                    {/*? <MovieDetails movie={this.props.activeMovie}/>*/}
                                    {/*: <SearchForm/>*/}
                                {/*}*/}
                                <MovieDetails movie={this.props.activeMovie}/>
                                <SearchForm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom-bar">
                    <BottomBar/>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    activeMovie: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.number,
        genre: PropTypes.string,
        rating: PropTypes.number,
        duration: PropTypes.number,
        description: PropTypes.string,
        director: PropTypes.string,
        cast: PropTypes.arrayOf(PropTypes.string)
    }),
    movies: PropTypes.array
};
