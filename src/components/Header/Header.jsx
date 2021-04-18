// packages
import React from 'react'
import { useEffect } from 'react'
import { ANCHOR_CONTACTS, ANCHOR_FACADES, ANCHOR_SERVICES } from 'constants/anchors'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { Link } from 'react-router-dom'

const scroll = () => {
  const scrollTop = window.scrollY
  const el = document.getElementById('header')

  if (scrollTop > 64) {
    el.classList.add('fixed')
  } else if (scrollTop < 64) {
    el.classList.remove('fixed')
  }
}

const handleClick = e => {
  const { value } = e.target
  scrollWindowTo(value)
}

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <div className='z-50 absolute left-0 top-0 w-full mt-64'>
       <div id='header' className='sm:fixed bg-white top-0 left-0 w-screen border-solid border-grayLight border-0 border-t-1 border-b-1'>
        <div className='wrapper h-80 flex items-center text-24'>
          <div className='font-bold'>Фасады сысолы</div>
          <div className='flex ml-auto sm:hidden'>
            <button onClick={handleClick} value={ANCHOR_FACADES} className='mx-16 inline-block font-medium'>фасады</button>
            <button onClick={handleClick} value={ANCHOR_SERVICES} className='mx-16 inline-block font-medium'>услуги</button>
            <button onClick={handleClick} value={ANCHOR_CONTACTS} className='mx-16 inline-block font-medium'>как заказать</button>
            <Link to='#' className='mx-16 inline-block font-medium'>цены</Link>
            <a className='mx-16 inline-block font-medium' href='/'>8 800 700 24 24</a>
          </div>
        </div>
       </div>
    </div>
  )
}
export default Header
