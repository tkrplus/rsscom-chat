import { connect } from 'react-redux'
import Thread from './Thread'

const mapStateToProps = (state, ownProps) => {
  const {
    repliesMap,
    isRepliesFetched
  } = state.Thread
  const {
    thread
  } = ownProps

  const replies = repliesMap.repliesMap.get(thread.threadId)

  return {
    replies: replies ? replies.replies : [],
    isRepliesFetched
  }
}

export default connect(
  mapStateToProps,
  null
)(Thread)
