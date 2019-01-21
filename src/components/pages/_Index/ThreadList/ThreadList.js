import React from 'react'
import styled from 'styled-components'
import Thread from './Thread'

export default (props) => {
  const {
    threads
  } = props
  return (
    <Wrapper>
      {
        threads.map(thread =>
          <Thread
            key={thread.threadId}
            thread={thread}
          />
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 74px;
  padding-bottom: 200px;
`
