import React from 'react'
import Reply from './Reply'
import ReplyForm from './ReplyForm'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Text from '~/src/components/organisms/Text'

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  }
})

const Thread = (props) => {
  const {
    classes,
    thread,
    replies
  } = props

  return (
    <Paper className={classes.paper}>
      <Typography
        variant='h6'
        component='h2'
      >
        { thread.title }
      </Typography>
      <Text text={thread.text}/>
      {
        replies.map(reply =>
          <Reply
            key={reply.replyId}
            reply={reply}
          />
        )
      }
      <ReplyForm
        thread={thread}
      />
    </Paper>
  )
}

export default withStyles(styles)(Thread)
