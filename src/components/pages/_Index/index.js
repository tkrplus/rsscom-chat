import { connect } from 'react-redux'
import Thread from './Thread'
import {
  initialize,
  clearFetchError
} from '~/src/modules/Thread'

const mapStateToProps = (state, ownProps) => {
  const {
    hasFetchError
  } = state.Thread

  return {
    hasFetchError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    componentDidMount: () => {
      dispatch(initialize())
    },
    clearFetchError: () => {
      dispatch(clearFetchError())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thread)
