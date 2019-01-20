import React from 'react'
import DefaultTemplate from '~/src/components/templates/DefualtTemplate'
import Tools from './Tools'
import Progress from './Progress'
import TicketContainer from './TicketContainer'
import TicketForm from './TicketForm'

class Todo extends React.Component {
  render() {
    return (
      <DefaultTemplate>
        <Tools />
        <Progress />
        <TicketContainer />
        <TicketForm />
      </DefaultTemplate>
    )
  }
}

export default Todo
