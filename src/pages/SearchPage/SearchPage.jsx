import React from 'react';

import TopBar from '../../components/Header/TopBar/TopBar';
import SearchForm from '../../components/Header/SearchForm/SearchForm';

import Header from '../../components/Header/Header';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Footer from '../../components/Footer/Footer';
import SortBar from '../../components/Header/SortBar/SortBar';

export default class SearchPage extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app__header">
                    <Header TopComponent={TopBar}
                            ContentComponent={SearchForm}/>
                    <SortBar/>
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

SearchPage.propTypes = {};