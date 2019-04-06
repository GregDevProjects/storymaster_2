import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        color: 'grey',
        backgroundColor: 'black'
      }

    },
    MuiInputBase: {
      root: {
        color: 'grey'
      }
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderColor: 'white !important'
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: 'white !important'
        }

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
