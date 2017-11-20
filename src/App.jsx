import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

if (process.env.BROWSER) {
	require('./App.scss');
}

import { requestGenres } from './actions';
import SearchPage from './pages/searchPage/SearchPage';
import FilmPage from './pages/FilmPage/FilmPage';
import Spinner from './components/common/Spinner/Spinner';

export class App extends Component {
    static prepareState(store) {
        return requestGenres()(store.dispatch);
    }

    componentDidMount() {
        const { requestGenres } = this.props;
        requestGenres();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/film/:id" component={FilmPage}/>
                    <Route path="/" component={SearchPage}/>
                </Switch>
                <Spinner visible={this.props.loading} />
            </div>
        )
    }
}
const mapStateToProps = ({ loading }) => ({ loading });

export default withRouter(connect(mapStateToProps, { requestGenres })(App));