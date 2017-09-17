import React from 'react';
import PropTypes from 'prop-types';
import './BottomBar.scss'
import SearchFilter from '../SearchFilter/SearchFilter';

export default class BottomBar extends React.Component {
    constructor() {
        super();
        this.state = {
            sortParams: ['release date', 'rating']
        };
    }

    render() {
        return (
            <div className="bottom-bar">
                <div className="bottom-bar__inner">
                    <div className="bottom-bar__left">
                        <div className="bottom-bar__title">7 movies found</div>
                    </div>
                    <div className="bottom-bar__right">
                        <SearchFilter filters={this.state.sortParams} type="sort"/>
                    </div>
                </div>
            </div>
        )
    }
}

BottomBar.propTypes = {};