import React, { Component } from 'react';
import './BottomBar.scss'
import SearchFilter from '../SearchFilter/SearchFilter';

class BottomBar extends Component {
    constructor() {
        super();
        this.state = {
            sortParams: ['release date', 'rating']
        };
    }

    sort() {
        //sort will be here
    }

    render() {
        return (
            <div className="bottom-bar">
                <div className="bottom-bar__inner">
                    <div className="bottom-bar__left">
                        <div className="bottom-bar__title">7 movies found</div>
                    </div>
                    <div className="bottom-bar__right">
                        <SearchFilter filters={this.state.sortParams} type="sort" onSelect={this.sort}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BottomBar;