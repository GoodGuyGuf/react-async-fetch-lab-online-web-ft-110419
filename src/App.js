// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

    state = {
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => {
            console.log(json)
                this.setState({
                    people: [json.people[0].name]
                })
        })
    }

    render(){
        return(
        <h1>{this.state.people}</h1>
        )
    }
}