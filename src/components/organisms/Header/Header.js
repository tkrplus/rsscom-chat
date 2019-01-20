import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const Header = (props) => {
  const {
    classes
  } = props
  return (
    <AppBar positionFixed className={classes.root}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
            LIBERTAS
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
