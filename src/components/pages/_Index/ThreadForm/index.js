import { connect } from 'react-redux'
import ThreadForm from './ThreadForm'
import {
  postThread
} from '~/src/modules/Thread'

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (title, text) => {
      dispatch(postThread(title, text))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ThreadForm)
