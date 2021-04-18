// packages
import React from 'react'
import BgImage from 'components/BgImage/BgImage'

const CardFacade = ({
  title,
  text,
  image,
  price
}) => {
  return (
    <div>
      <BgImage className='h-360 sm:h-300' image={image} />
      <h3 className='text-32 font-bold mt-24'>{title}</h3>
      <div className='h-2 bg-red w-2/3 mt-8 mb-24' />
      <div className='text-18' dangerouslySetInnerHTML={{ __html: text }} />
      <div className='text-18 font-medium mt-24'>{price}</div>
    </div>
  )
}
export default CardFacade
