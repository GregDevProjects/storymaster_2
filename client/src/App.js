import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import moment from 'moment'

import {CountdownTimer} from './components/CountdownTimer'

class App extends Component {
    constructor() {
        super();
        this.state = {
            roundTimeLeft: '',
            roundNumber: ''
        }
    }

    componentDidMount() {
        const timeRef = firebase.database().ref().child('next_round_start');
        const roundNumberRef = firebase.database().ref().child('round_number');
        timeRef.on('value', snap => 
            this.setState({roundTimeLeft : snap.val()})
        );
        roundNumberRef.on('value', snap => 
            this.setState({roundNumber: snap.val()})
        );
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.roundNumber}</h1>
                <CountdownTimer date={moment(this.state.roundTimeLeft).toDate()}></CountdownTimer>
            </div>
            
        );
    }
}

export default App;
