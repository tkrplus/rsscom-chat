import { connect } from 'react-redux'
import Header from './Header'
import {
  search
} from '~/src/modules/Thread'

const mapStateToProps = (state, ownProps) => {
  const {
    searchText
  } = state.Thread

  return {
    searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (searchText) => {
      dispatch(search(searchText))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
