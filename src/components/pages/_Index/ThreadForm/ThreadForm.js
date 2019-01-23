import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  title: {
    marginBottom: '8px'
  },
  button: {
    padding: '8px',
    minWidth: '50px'
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
                <StyledTextField
                  fullWidth
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
                <StyledTextAreaField
                  multiline
                  rowsMax={5}
                  fullWidth
                  label='text'
                  value={text}
                  variant='outlined'
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
                  disabled={!text || !title || !text.length || !title.length}
                >
                  送信
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
  padding: 6px;
  z-index: 2;
`

const StyledTextField = styled(TextField)`
  margin-bottom: 8px;
  input {
    padding: 9px;
  }
  > label {
    transform: translate(9px,12px) scale(1);
  }
`

const StyledTextAreaField = styled(TextField)`
  > div {
    padding: 9px;
  }
  > label {
    transform: translate(9px,12px) scale(1);
  }
`

const Table = styled.table`
  width: 100%;
`

const PostColumn = styled.td`
  width: 50px;
  vertical-align: bottom;
`

export default withStyles(styles)(ThreadForm)
