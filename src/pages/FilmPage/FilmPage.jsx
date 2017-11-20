import React from 'react';

import TopBar from '../../components/Header/TopBar/TopBar';
import Header from '../../components/Header/Header';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Footer from '../../components/Footer/Footer';
import MovieDetails from '../../components/Header/MovieDetails/MovieDetails';
import DetailsBar from '../../components/Header/DetailsBar/DetailsBar';
import { showMovieDetails } from '../../actions/movies.actions';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

export class FilmPage extends React.Component {
    componentWillMount() {
        const { showMovieDetails, match } = this.props;
        showMovieDetails(match.params.id);
    }

    render() {
        return (
            <div className="app">
                <div className="app__header">
                    <Header TopComponent={TopBar}
                            ContentComponent={MovieDetails}/>
                    <DetailsBar/>
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

export default withRouter(connect(null, { showMovieDetails })(FilmPage));
