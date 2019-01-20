import Tools from './Tools'
import { connect } from 'react-redux'
import {
  openTicketCreateDialog
} from '~/src/modules/Ticket'
import {
  editSearchText,
  editSearchCategories
} from '~/src/modules/TicketTool'

const mapStateToProps = (state) => {
  const {
    TicketTool
  } = state
  return {
    searchText: TicketTool.searchText,
    searchCategories: TicketTool.searchCategories
  }
}

const mapDispatchToPros = (dispatch) => {
  return {
    openTicketCreateDialog: () => {
      dispatch(openTicketCreateDialog())
    },
    editSearchText: (text) => {
      dispatch(editSearchText(text))
    },
    editSearchCategories: (categories) => {
      dispatch(editSearchCategories(categories))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Tools)
