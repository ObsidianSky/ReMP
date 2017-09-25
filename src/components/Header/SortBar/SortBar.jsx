import React, { Component } from 'react';
import Bar from '../../common/Bar/Bar';
import SearchFilter from '../SearchFilter/SearchFilter';

class BottomBar extends Component {
    constructor() {
        super();
        this.state = {
            sortParams: ['release date', 'rating'],
            moviesAmount: 7
        };
    }

    sort() {
        //sort will be here
    }

    render() {
        return (
            <Bar title={`${this.state.moviesAmount} movies found`}>
                {this.state.moviesAmount &&
                    <SearchFilter filters={this.state.sortParams}
                                  type="sort" onSelect={this.sort}
                                  title="Sort by"/>
                }
            </Bar>
        )
    }
}

export default BottomBar;