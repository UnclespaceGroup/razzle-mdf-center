// packages
import React from 'react'

const BgImage = ({ image, children }) => {
  return (
    <div className='bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  )
}
export default BgImage
