import React from 'react'
import DefaultTemplate from '~/src/components/templates/DefualtTemplate'
import ThreadList from './ThreadList'
import ThreadForm from './ThreadForm'

export default (props) => {
  return (
    <DefaultTemplate>
      <ThreadList />
      <ThreadForm />
    </DefaultTemplate>
  )
}
