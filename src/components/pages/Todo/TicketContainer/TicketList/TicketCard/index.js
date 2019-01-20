import TicketCard from './TicketCard'
import { connect } from 'react-redux'
import {
  changeToNextStatus
} from '~/src/modules/Ticket'
const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToPros = (dispatch, ownProps) => {
  const ticket = ownProps.ticket
  return {
    changeToNextStatus: () => {
      dispatch(changeToNextStatus(ticket.id))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToPros
)(TicketCard)
