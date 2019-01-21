import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  table: {
    marginTop: theme.spacing.unit
  },
  title: {
    width: '100%',
    marginBottom: '8px'
  },
  text: {
    width: '100%'
  }
})

class ReplyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    const {
      classes,
      onSubmit
    } = this.props
    const {
      text
    } = this.state

    const handleSubmit = (e) => {
      e.preventDefault()
      const {
        text
      } = this.state
      onSubmit(text)
      this.setState({
        text: ''
      })
    }

    return (
      <Form
        onSubmit={e => handleSubmit(e)}
      >
        <Divider/>
        <Table className={classes.table}>
          <tbody>
            <tr>
              <td>
                <TextField
                  multiline
                  name='text'
                  label='text'
                  variant='outlined'
                  value={text}
                  className={classes.text}
                  onChange={e => {
                    this.setState({ text: e.target.value })
                  }}
                />
              </td>
              <PostColumn>
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                  className={classes.button}
                >
                  Post
                </Button>
              </PostColumn>
            </tr>
          </tbody>
        </Table>
      </Form>
    )
  }
}

const Form = styled.form`
`
const Table = styled.table`
  width: 100%;
`

const PostColumn = styled.td`
  width: 70px;
`

export default withStyles(styles)(ReplyForm)
