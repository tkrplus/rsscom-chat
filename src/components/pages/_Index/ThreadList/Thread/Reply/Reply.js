import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  reply: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
})
const Reply = (props) => {
  const {
    classes,
    reply
  } = props
  return (
    <div>
      <Divider/>
      <Typography
        component='p'
        className={classes.reply}
      >
        { reply.text }
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Reply)
