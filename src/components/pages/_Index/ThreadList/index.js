import { connect } from 'react-redux'
import ThreadList from './ThreadList'

const mapStateToProps = state => {
  const {
    threads
  } = state.Thread
  return {
    threads: threads.threads
  }
}

export default connect(
  mapStateToProps,
  null
)(ThreadList)
