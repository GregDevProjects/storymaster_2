import React from 'react'
import Grid from '@material-ui/core/Grid'
import HalfWidthButton from './HalfWidthButton'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'

export default function Write (props) {
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
        />
        <Grid container spacing={8}>
          {HalfWidthButton('Back', 'arrow_back', props.onBackClick)}
          {HalfWidthButton('Submit', 'public')}

        </Grid>
      </Card>
    </Grid>
  )
}
