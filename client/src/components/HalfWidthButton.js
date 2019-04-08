import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'
import React from 'react'
import Icon from '@material-ui/core/Icon'

const cardButtonBlue = { backgroundColor: '#4daaf2', color: 'white' }
const cardButtonDisabled = { backgroundColor: 'grey', color: 'white', pointerEvents: 'none' }

export default function HalfWidthButton (text, icon, callback, isDisabled) {
  return (
    <Grid item xs={6}>
      <Card style={ isDisabled ? cardButtonDisabled : cardButtonBlue}>
        <CardActionArea onClick={callback}>
          <div><Icon>{icon}</Icon></div>
          {text}
        </CardActionArea>
      </Card>
    </Grid>
  )
}
