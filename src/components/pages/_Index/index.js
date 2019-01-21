import { connect } from 'react-redux'
import Thread from './Thread'
import {
  initialize
} from '~/src/modules/Thread'

const mapDispatchToProps = dispatch => {
  return {
    componentDidMount: () => {
      dispatch(initialize())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Thread)
