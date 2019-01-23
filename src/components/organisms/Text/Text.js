import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Markdown from 'react-markdown'

const styles = theme => ({
  text: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    wordWrap: 'break-word'
  }
})

const urlRegExp = /(https?:\/\/\S+)/g

const Text = (props) => {
  const {
    classes,
    text
  } = props
  const texts = text.split(/\r?\n/)
    .reduce((sum, val) => sum.concat(val).concat(<br/>), [])

  return (
    <Typography
      component='p'
      className={classes.text}
    >
      {
        texts.map(text =>
          <StyledMarkdown
            source={text}
            linkTarget='_blank'
          />
        )
      }
    </Typography>
  )
}

const StyledMarkdown = styled(Markdown)`
  > p {
    margin: 0;
  }
`

export default withStyles(styles)(Text)
