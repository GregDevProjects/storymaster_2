import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import HalfWidthButton from './HalfWidthButton'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'

export default class Write extends Component {
  constructor () {
    super()
    this.state = {
      message: ''
    }
  }

  onSubmit () {
    this.props.onWritingSubmit(this.state.message)
  }
  render () {
    return (
      <Grid item xs={12}>
        <Card>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            rowsMax="4"
            margin="normal"
            variant="outlined"
            placeholder="What comes next?"
            style={{ width: '100%' }}
            label={'yo'}
            onChange={(e) => this.setState({ message: e.target.value }) }
          />
          <Grid container spacing={8}>
            {HalfWidthButton('Back', 'arrow_back', this.props.onBackClick)}
            {HalfWidthButton('Submit', 'public', this.onSubmit.bind(this))}
          </Grid>
        </Card>
      </Grid>
    )
  }
}
