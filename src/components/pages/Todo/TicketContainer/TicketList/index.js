import TicketList from './TicketList'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const {
    Ticket,
    TicketTool
  } = state
  const {
    status
  } = ownProps
  const {
    searchText,
    searchCategories
  } = TicketTool
  const tickets = Ticket.tickets.filterByStatus(status)
  const searchedTickets = tickets
    .filter(ticket => !searchText || ticket.summary.includes(searchText))
    .filter(ticket =>
      !searchCategories.length ||
      searchCategories.some(category => category.equals(ticket.category)))
  return {
    tickets: searchedTickets
  }
}

const mapDispatchToPros = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(TicketList)
