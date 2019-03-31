// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'

export class CountdownTimer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timeLeft:
        { days: 0,
          hours: 0,
          min: 0,
          sec: 0
        },
      totalSecondsLeft: 0
    }
  }

  componentDidMount () {
    // update every second
    this.interval = setInterval(() => {
      const timeLeft = this.calculateCountdown(this.props.date)

      const date = timeLeft.timeLeft
      date ? this.setState({ timeLeft: date, totalSecondsLeft: timeLeft.totalSecondsLeft }) : this.stop()
    }, 1000)
  }

  componentWillUnmount () {
    this.stop()
  }

  calculateCountdown (endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    const totalSecondsLeft = diff

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    }

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return { timeLeft: timeLeft, totalSecondsLeft: totalSecondsLeft }
  }

  stop () {
    clearInterval(this.interval)
  }

  addLeadingZeros (value) {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  render () {
    const countDown = this.state.timeLeft

    return (
      <React.Fragment>
        <div>
          <strong>{this.addLeadingZeros(countDown.hours)} : {this.addLeadingZeros(countDown.min)} : {this.addLeadingZeros(countDown.sec)}</strong>
          {/* <LinearProgress variant="determinate" value={(this.state.totalSecondsLeft / 10800) * 100}></LinearProgress> */}
          {/* <CircularProgress variant="determinate" value={(this.state.totalSecondsLeft / 10800) * 100}>></CircularProgress> */}
        </div>

      </React.Fragment>
    )
  }
}

CountdownTimer.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
}
