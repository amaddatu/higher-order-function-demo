import React, { Component } from 'react';
import Search from '../search.json';

class Filter extends Component {
    state={
        search: Search
    };

    componentDidMount(){
        console.log(this.state.search);
    }

    render(){
        return (
            <div>
                {
                    this.state.search.data
                    // filter is a for-loop for an array
                    // filter is a higher order function
                    // return a true or false or a condition
                    .filter( giphy => {
                        return giphy.username.length != 0;
                    })
                    .map( (giphy, index) => {
                        return (
                            <div key={index}>
                                <h2>{index}</h2>
                                <img src={giphy.images.fixed_width_small.url} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Filter;