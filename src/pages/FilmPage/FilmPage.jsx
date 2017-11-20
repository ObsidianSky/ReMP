import React, { Component } from 'react';

import TopBar from '../../components/Header/TopBar/TopBar';
import Header from '../../components/Header/Header';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Footer from '../../components/Footer/Footer';
import MovieDetails from '../../components/Header/MovieDetails/MovieDetails';
import DetailsBar from '../../components/Header/DetailsBar/DetailsBar';
import { showMovieDetails } from '../../actions/movies.actions';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { hideSpinner, showSpinner } from "../../actions/loading.actions";

export class FilmPage extends Component {
    componentWillMount() {
        this.props.showSpinner();
    }

    componentDidMount() {
        const { showMovieDetails, match, hideSpinner } = this.props;

        //think about move these logic somewhere
        showMovieDetails(match.params.id)
            .then(() => hideSpinner());
    }

    render() {
        if (this.props.loading) return null;

        return (
            <div className="app">
                <div className="app__header">
                    <header className="header">
                        <div className="header__background">
                            <div className="header__shadow">
                                <div className="header__inner">
                                    <div className="header__top-bar">
                                        <TopBar/>
                                    </div>
                                    <div className="header__content">
                                        <MovieDetails/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="app__main">
                    <MovieGrid/>
                </div>
                <div className="app__footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

FilmPage.propTypes = {};

const mapStateToProps = ({ loading }) => ({ loading });

const mapDispatchToProps = {
    showMovieDetails,
    showSpinner,
    hideSpinner
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmPage));
