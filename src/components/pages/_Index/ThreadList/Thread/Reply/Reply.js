import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Text from '~/src/components/organisms/Text'

const styles = theme => ({
  reply: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    wordWrap: 'break-word'
  }
})

const urlRegExp = /(https?:\/\/\S+)/g

const Reply = (props) => {
  const {
    classes,
    reply
  } = props

  return (
    <div>
      <Divider/>
      <Text text={reply.text}/>
    </div>
  )
}

export default withStyles(styles)(Reply)
