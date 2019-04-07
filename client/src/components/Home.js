import moment from 'moment'
import Paper from '@material-ui/core/Paper'
import { CountdownTimer } from './CountdownTimer'
import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import HalfWidthButton from './HalfWidthButton'
import Grid from '@material-ui/core/Grid'

import * as firebase from 'firebase'

import Write from './Write'

const ACTIONS = {
  menu: 1,
  writing: 2,
  voting: 3
}

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      roundTimeLeft: '',
      roundNumber: '',
      action: ACTIONS.menu
    }
    this.userId = 123456
  }

  componentDidMount () {
    const storyRef = firebase.database().ref().child('story_current')
    storyRef.on('value', snap => {
      const value = snap.val()
      this.setState({
        roundTimeLeft: value.next_round_start,
        roundNumber: value.round_number
      })
    })
  }

  onWriteClick () {
    this.setState({ action: ACTIONS.writing })
  }

  onVoteClick () {
    console.log('vote')
  }

  onBackClick () {
    this.setState({ action: ACTIONS.menu })
  }

  onWritingSubmit (message) {
    const dbRefWritings = firebase.database().ref().child('writings')
    const dbRefStoryCurrent = firebase.database().ref().child('story_current')
    dbRefStoryCurrent.once('value', snap => {
      const values = snap.val()
      dbRefWritings.push().set({
        message: message,
        round_number: values.round_number,
        user_id: this.userId,
        story_id: values.id
      })
    }
    )
  }

  actionArea () {
    if (this.state.action === ACTIONS.menu) {
      return (
        <React.Fragment>
          {HalfWidthButton('Write', 'edit', this.onWriteClick.bind(this))}
          {HalfWidthButton('Vote', 'how_to_vote', this.onVoteClick)}
        </React.Fragment>
      )
    } else if (this.state.action === ACTIONS.writing) {
      return (
        <Write
          onWritingSubmit={this.onWritingSubmit.bind(this)}
          onBackClick={ this.onBackClick.bind(this) }>
        </Write>
      )
    }
  }

  render () {
    return (
      <React.Fragment>
        <Typography style={{ marginTop: '15px' }} variant="h4">Round {this.state.roundNumber}/10</Typography>
        <CountdownTimer date={moment(this.state.roundTimeLeft).toDate()}></CountdownTimer>
        <hr style={{ marginTop: '20px' }}></hr>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper style={{ padding: '10px' }}>
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
            </Paper>
          </Grid>
          {this.actionArea()}
        </Grid>
      </React.Fragment>
    )
  }
}
