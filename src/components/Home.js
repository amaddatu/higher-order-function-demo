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
                {Object.keys(this.state.search.data).map( k => {
                    return <p>{k}</p>
                })}
            </div>
        )
    }
}

export default Home;