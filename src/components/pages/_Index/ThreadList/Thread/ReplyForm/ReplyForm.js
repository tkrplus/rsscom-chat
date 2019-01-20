import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Divider from '@material-ui/core/Divider'

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
    <div>
      <Divider/>
      <Table>
        <tbody>
          <tr>
            <td>
              <TextField
                multiline
                name='text'
                label='text'
                variant='outlined'
                className={classes.text}
              />
            </td>
            <PostColumn>
              <Button variant="contained" color="primary" className={classes.button}>
              Post
              </Button>
            </PostColumn>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: solid 1px #90a4ae;
  padding: 12px;
`
const Table = styled.table`
  width: 100%;
`

const PostColumn = styled.td`
  width: 70px;
`

export default withStyles(styles)(ThreadForm)
