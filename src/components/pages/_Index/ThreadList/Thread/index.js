import { connect } from 'react-redux'
import Thread from './Thread'

const mapStateToProps = (state, ownProps) => {
  const {
    repliesMap,
    isRepliesFetched,
    searchText
  } = state.Thread
  const {
    thread
  } = ownProps

  const replies = repliesMap.repliesMap.get(thread.threadId)

  const isSearchMode = !!searchText
  const regExp = new RegExp(searchText)
  const hasSearchText =
    regExp.test(thread.title) ||
    regExp.test(thread.text) ||
    replies.replies.some(reply => regExp.test(reply.text))

  return {
    replies: replies ? replies.replies : [],
    isRepliesFetched,
    isSearchMode,
    hasSearchText
  }
}

export default connect(
  mapStateToProps,
  null
)(Thread)
