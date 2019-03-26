import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import moment from 'moment'

import {CountdownTimer} from './components/CountdownTimer'

class App extends Component {
    constructor() {
        super();
        this.state = {
            roundTimeLeft: ''
        }
    }

    componentDidMount() {
        const timeRef = firebase.database().ref().child('next_round_start');
        timeRef.on('value', snap => 
            this.setState({roundTimeLeft : snap.val()})
        );

    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.roundTimeLeft}</h1>
                <CountdownTimer date={moment(this.state.roundTimeLeft).toDate()}></CountdownTimer>
            </div>
            
        );
    }
}

export default App;
