import TicketForm from './TicketForm'
import { connect } from 'react-redux'
import {
  closeTicketCreateDialog,
  editCreateTicket,
  createTicket
} from '~/src/modules/Ticket'

const mapStateToProps = (state) => {
  const createTicket = state.Ticket.create
  const error = createTicket && createTicket.validate()
  return {
    isOpen: !!createTicket,
    ticket: createTicket,
    hasError: !!error,
    summaryError: error && error.summary,
    deadlineError: error && error.deadline
  }
}

const mapDispatchToPros = (dispatch) => {
  return {
    closeTicketCreateDialog: () => {
      dispatch(closeTicketCreateDialog())
    },
    editCreateTicket: (summary, category, deadline) => {
      dispatch(editCreateTicket(summary, category, deadline))
    },
    createTicket: () => {
      dispatch(createTicket())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(TicketForm)
