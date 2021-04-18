// packages
import React from 'react'
import BgImage from 'components/BgImage/BgImage'

const CardService = ({
  title,
  text,
  image,
  link
}) => {
  return (
    <BgImage className='h-400 relative shadow sm:h-360' image={image}>
      <div className='absolute bottom-0'>
        <h3
          className='text-24 font-bold px-24 h-120 flex flex-col justify-end'
          style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)' }}
        >{title}</h3>
        <div className='text-18 bg-white px-24 pt-8 pb-40' dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </BgImage>
  )
}
export default CardService
