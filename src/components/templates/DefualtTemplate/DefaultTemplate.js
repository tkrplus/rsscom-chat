import React from 'react'
import Header from '~/src/components/organisms/Header'

const DefaultTemplate = (props) => {
  return (
    <div>
      <Header />
      { props.children }
    </div>
  )
}

export default DefaultTemplate
