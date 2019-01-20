import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

const Progress = (props) => {
  const {
    isActive
  } = props

  const variant = isActive ? 'query' : 'determinate'
  return (
    <LinearProgress
      variant={variant}
      value={100}
    />
  )
}

export default Progress
