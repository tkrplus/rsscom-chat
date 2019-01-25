import React from 'react'
import DefaultTemplate from '~/src/components/templates/DefualtTemplate'
import ThreadList from './ThreadList'
import ThreadForm from './ThreadForm'
import ErrorDialog from '~/src/components/organisms/ErrorDialog'

class Thread extends React.Component {
  componentDidMount() {
    this.props.componentDidMount && this.props.componentDidMount()
  }

  render() {
    const {
      hasFetchError,
      clearFetchError
    } = this.props
    return (
      <DefaultTemplate>
        <ThreadList />
        <ThreadForm />
        <ErrorDialog
          open={hasFetchError}
          title='通信エラー'
          onClose={clearFetchError}
        />
      </DefaultTemplate>
    )
  }
}

export default Thread
