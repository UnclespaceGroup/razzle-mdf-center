// packages
import React from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import _ from 'lodash'
import BgImage from 'components/BgImage/BgImage'
import { useEffect } from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { useCallback } from 'react'
import { useState } from 'react'

const emblaOptions = {
  draggable: true
}

const BigSlider = ({ slides }) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0)

  const [emblaRef, embla] = useEmblaCarousel({
    ...emblaOptions
  })

  // Обновляем слайдер при смене параметров
  useEffect(() => {
    const onSelect = () => {
      setSelectedSlideIndex(embla.selectedScrollSnap())
    }
    if (embla) {

      embla.reInit({
        ...emblaOptions,
        slidesToScroll: 1
      })
      embla.on('select', onSelect)
    }
    // eslint-disable-next-line
  }, [slides])

  const handleClickPrev = useCallback(() => embla?.scrollPrev(), [embla])
  const handleClickNext = useCallback(() => embla?.scrollNext(), [embla])

  return (
    <div className='relative'>
      <div className='absolute z-10 right-0 bottom-0 pb-64 pr-64 sm:top-0 sm:bottom-auto sm:p-0 sm:mt-16 sm:mr-24'>
        <div className='flex justify-end text-48 text-blackSolid'>
          <button disabled={selectedSlideIndex === 0} onClick={handleClickPrev} className='mr-24'>
            <MdArrowBack />
          </button>
          <button disabled={selectedSlideIndex === (_.size(slides) - 1)} onClick={handleClickNext}>
            <MdArrowForward />
          </button>
        </div>
      </div>
      <div ref={emblaRef} className='overflow-hidden bg-gray'>
        <div className='flex w-full'>
          {_.map(slides, (slide, key) => (
            <div className='flex-0-0-auto w-full' key={key}>
              <BgImage
                className='w-full h-700 flex flex-col justify-end sm:h-400 bg-contain bg-center'
                image={slide?.image}
              >
                <div className='wrapper pb-64 text-white'>
                  <h2 className='text-32 font-medium text-shadow'>{slide?.title}</h2>
                  <div className='text-18 mt-16 text-shadow'>{slide?.text}</div>
                </div>
              </BgImage>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default BigSlider
