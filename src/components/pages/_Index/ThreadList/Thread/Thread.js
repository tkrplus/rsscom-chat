import React from 'react'
import Reply from './Reply'
import ReplyForm from './ReplyForm'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  }
})

const Thread = (props) => {
  const {
    classes
  } = props
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" component="h2">
          Title Title Title Title Title Title Title
      </Typography>
      <Typography component="p">
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      </Typography>
      <Reply/>
      <Reply/>
      <ReplyForm/>
    </Paper>
  )
}

export default withStyles(styles)(Thread)
