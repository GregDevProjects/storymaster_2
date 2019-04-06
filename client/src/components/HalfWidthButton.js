import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'
import React from 'react'
import { cardButtonBlue } from '../styles'
import Icon from '@material-ui/core/Icon'

export default function HalfWidthButton (text, icon, callback) {
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
