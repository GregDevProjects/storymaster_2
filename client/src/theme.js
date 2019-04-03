import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        color: 'grey',
        backgroundColor: 'black'
      }

    }
  },
  palette: {
    background: {
      default: 'black'
    }
  },
  typography: {
    useNextVariants: true,
    h4: {
      color: 'white'
    },
    body2: {
      color: 'white'
    }
  }
})
