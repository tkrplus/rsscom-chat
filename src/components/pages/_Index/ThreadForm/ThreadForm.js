import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  title: {
    width: '100%',
    marginBottom: '8px'
  },
  text: {
    width: '100%'
  }
})

const ThreadForm = (props) => {
  const {
    classes
  } = props
  return (
    <Wrapper>
      <Table>
        <tbody>
          <tr>
            <td>
              <TextField
                name='title'
                label='title'
                variant='outlined'
                className={classes.title}
              />
            </td>
            <PostColumn>
              <Button variant="contained" color="primary" className={classes.button}>
              Post
              </Button>
            </PostColumn>
          </tr>
          <tr>
            <td>
              <TextField
                multiline
                name='text'
                label='text'
                rows='2'
                variant='outlined'
                className={classes.text}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  border-top: solid 1px #90a4ae;
  padding: 12px;
  z-index: 2;
`
const Table = styled.table`
  width: 100%;
`

const PostColumn = styled.td`
  width: 70px;
`

export default withStyles(styles)(ThreadForm)
