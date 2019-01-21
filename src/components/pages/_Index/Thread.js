import React from 'react'
import DefaultTemplate from '~/src/components/templates/DefualtTemplate'
import ThreadList from './ThreadList'
import ThreadForm from './ThreadForm'

class Thread extends React.Component {
  componentDidMount() {
    this.props.componentDidMount && this.props.componentDidMount()
  }

  render() {
    return (
      <DefaultTemplate>
        <ThreadList />
        <ThreadForm />
      </DefaultTemplate>
    )
  }
}

export default Thread
