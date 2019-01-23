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

class ThreadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }

  render() {
    const {
      classes,
      onSubmit
    } = this.props
    const {
      title,
      text
    } = this.state

    const handleSubmit = (e) => {
      e.preventDefault()
      const {
        title,
        text
      } = this.state
      onSubmit(title, text)
      this.setState({
        title: '',
        text: ''
      })
    }
    return (
      <Form onSubmit={e => handleSubmit(e)}>
        <Table>
          <tbody>
            <tr>
              <td>
                <TextField
                  name='title'
                  label='title'
                  value={title}
                  variant='outlined'
                  className={classes.title}
                  onChange={e => {
                    this.setState({ title: e.target.value })
                  }}
                />
                <br/>
                <TextField
                  multiline
                  name='text'
                  label='text'
                  value={text}
                  variant='outlined'
                  onChange={e => {
                    this.setState({ text: e.target.value })
                  }}
                  className={classes.text}
                />
              </td>
              <PostColumn>
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                  className={classes.button}
                  disabled={!text || !title || !text.length || !title.length}
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
  vertical-align: bottom;
`

export default withStyles(styles)(ThreadForm)
