// packages
import React from 'react'
import cn from 'classnames'

const BgImage = ({ image, children, className }) => {
  return (
    <div
      className={cn('bg-center bg-no-repeat bg-cover', className)}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  )
}
export default BgImage
