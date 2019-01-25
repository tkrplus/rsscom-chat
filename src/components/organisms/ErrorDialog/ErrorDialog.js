import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  text: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    wordWrap: 'break-word'
  }
})

const Text = (props) => {
  const {
    classes,
    open,
    title,
    onClose
  } = props

  return (
    <Dialog
      open={open}
      className={classes.dialog}
    >
      <DialogTitle>
        { title }
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default withStyles(styles)(Text)
