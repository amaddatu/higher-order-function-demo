import React, { Component } from 'react';
import Search from '../search.json';

class Home extends Component {
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
                    this.state.search.data.map( (giphy, index) => {
                        return (
                            <div key={index}>
                            <img src={giphy.images.fixed_width_small.url} />
                            </div>
                        )
                    })
                }
                {/* {this.state.search.data[0].images.original.url}<br/> */}
                {Object.keys( // get the keys of the object as an array
                    this.state.search.data[0].images.original
                )
                // you have map available when you have an array
                // map is a type of for-loop and higher order function
                // tranforming an object's key into a paragraph tag
                .map( (key, index) => {
                    return <span key={index}>{key}<br/></span>
                })
                // ES6 for-loops
                // map, reduce, filter, forEach
                }
                
            </div>
        )
    }
}

export default Home;