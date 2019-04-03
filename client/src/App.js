import React, { Component } from 'react'
import './App.css'
import * as firebase from 'firebase'
import moment from 'moment'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import CardActionArea from '@material-ui/core/CardActionArea'
import Paper from '@material-ui/core/Paper'
import { cardButtonBlue } from './styles'
import { CountdownTimer } from './components/CountdownTimer'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  constructor () {
    super()
    this.state = {
      roundTimeLeft: '',
      roundNumber: ''
    }
  }

  componentDidMount () {
    const timeRef = firebase.database().ref().child('next_round_start')
    const roundNumberRef = firebase.database().ref().child('round_number')
    timeRef.on('value', snap =>
      this.setState({ roundTimeLeft: snap.val() })
    )
    roundNumberRef.on('value', snap =>
      this.setState({ roundNumber: snap.val() })
    )
  }

  onWriteClick () {
    console.log('write')
  }

  onVoteClick () {
    console.log('vote')
  }
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App" style={{ padding: '5px' }}>
            <Typography style={{ marginTop: '15px' }} variant="h4">Round {this.state.roundNumber}/10</Typography>
            <CountdownTimer date={moment(this.state.roundTimeLeft).toDate()}></CountdownTimer>
            <hr style={{ marginTop: '20px' }}></hr>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Paper style={{ padding: '10px' }}>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
                </Paper>
              </Grid>
              {halfWidthButton('Write', 'edit', this.onWriteClick)}
              {halfWidthButton('Vote', 'how_to_vote', this.onVoteClick)}
            </Grid>

          </div>
        </CssBaseline>
      </MuiThemeProvider>
    )
  }
}

function halfWidthButton (text, icon, callback) {
  return (
    <Grid item xs={6}>
      <Card style={cardButtonBlue}>
        <CardActionArea onClick={callback}>
          <div><Icon>{icon}</Icon></div>
          {text}
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default App
