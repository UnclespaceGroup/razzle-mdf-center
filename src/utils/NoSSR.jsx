// packages
import React, { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'

const NoSSR = ({ children }) => {
  const [mount, setMount] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setMount(true)
  }, [])

  if (mount) {
    return children
  }
  return null
}

export default React.memo(NoSSR)
