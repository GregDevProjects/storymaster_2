import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  constructor () {
    super()
    this.state = {
      roundTimeLeft: '',
      roundNumber: ''
    }
  }

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App" style={{ padding: '5px' }}>
            <Home></Home>
          </div>
        </CssBaseline>
      </MuiThemeProvider>
    )
  }
}

export default App
