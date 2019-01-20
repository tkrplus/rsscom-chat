import React from 'react'
import styled from 'styled-components'
import Thread from './Thread'

export default (props) => {
  return (
    <Wrapper>
      <Thread/>
      <Thread/>
      <Thread/>
      <Thread/>
      <Thread/>
      <Thread/>
      <Thread/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 74px;
  padding-bottom: 200px;
`
