import React from 'react';
import './App.scss'

import Header from './components/Header/Header';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
            </div>
        )
    }
}