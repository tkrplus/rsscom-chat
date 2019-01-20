import {
  createMuiTheme
} from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import teal from '@material-ui/core/colors/teal'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: teal
  }
})

export default theme
