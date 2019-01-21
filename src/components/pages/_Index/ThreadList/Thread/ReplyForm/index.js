import { connect } from 'react-redux'
import ReplyForm from './ReplyForm'

import {
  postReply
} from '~/src/modules/Thread'

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    thread
  } = ownProps
  return {
    onSubmit: (text) => {
      dispatch(postReply(thread.threadId, text))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ReplyForm)
