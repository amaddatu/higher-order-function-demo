import React, { Component } from 'react';
import Search from '../search.json';

class Reduce extends Component {
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
                    // this.state.search.data
                    // // reduce is a for-loop
                    // // reduce is a higher order functions
                    // // acc is an accumulator
                    // // can also be used as a filter
                    // .reduce ( (acc, giphy) => {
                    //     if(giphy.username.length != 0){
                    //         acc.push(giphy);
                    //     }
                    //     return acc;
                    //     // starting point for your accumulator
                    // }, [])
                    // .map( (giphy, index) => {
                    //     return (
                    //         <div key={index}>
                    //         <img src={giphy.images.fixed_width_small.url} />
                    //         </div>
                    //     )
                    // })
                }
                {
                    // this.state.search.data
                    // // reduce is a for-loop
                    // // reduce is a higher order functions
                    // // acc is an accumulator
                    // // can be used to re-sort arrays
                    // .reduce ( (acc, giphy) => {
                    //     let index = Math.floor(Math.random() * acc.length);
                    //     // acc.push(giphy);
                    //     acc.splice(index, 0, giphy);
                    //     return acc;
                    //     // starting point for your accumulator
                    // }, [])
                    // .map( (giphy, index) => {
                    //     return (
                    //         <div key={index}>
                    //         <img src={giphy.images.fixed_width_small.url} />
                    //         </div>
                    //     )
                    // })
                }
                {
                    this.state.search.data
                    // reduce is a for-loop
                    // reduce is a higher order functions
                    // acc is an accumulator
                    // can be used to analyze data
                    .reduce ( (acc, giphy) => {
                        // acc++; // total number of giphys
                        // acc += giphy.id.length; // total number of letters in ID
                        if(giphy.slug.indexOf('1') >= 0){
                            acc++;
                        };
                        return acc;
                        // starting point for your accumulator
                    }, 0)
                    // .map( (giphy, index) => {
                    //     return (
                    //         <div key={index}>
                    //         <img src={giphy.images.fixed_width_small.url} />
                    //         </div>
                    //     )
                    // })
                }
                
            </div>
        )
    }
}

export default Reduce;