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
  },
  button: {
    padding: '8px',
    minWidth: '50px'
  }
})

class ReplyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null
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
        text: null
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
                <StyledTextAreaField
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
                  disabled={!text || !text.length}
                  className={classes.button}
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
`
const Table = styled.table`
  width: 100%;
`

const PostColumn = styled.td`
  width: 50px;
`

const StyledTextAreaField = styled(TextField)`
  > div {
    padding: 9px;
  }
  > label {
    transform: translate(9px,12px) scale(1);
  }
`

export default withStyles(styles)(ReplyForm)
