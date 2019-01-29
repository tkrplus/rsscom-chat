import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 4,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 4,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
})

const Header = (props) => {
  const {
    classes,
    searchText,
    search
  } = props
  return (
    <AppBar positionFixed className={classes.root}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
            LIBERTAS
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            value={searchText}
            onChange={e => search(e.target.value)}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
