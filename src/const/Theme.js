import {
  createMuiTheme
} from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import amber from '@material-ui/core/colors/amber'

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: amber
  }
})

export default theme
