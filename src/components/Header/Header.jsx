// packages
import React from 'react'
import { useEffect } from 'react'
import { ANCHOR_CONTACTS, ANCHOR_FACADES, ANCHOR_SERVICES } from 'constants/anchors'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { Link } from 'react-router-dom'
import { PAGE_MAIN, PAGE_PRICES } from 'constants/PAGES'

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
          <Link className='font-bold flex items-center' to={PAGE_MAIN}>
            <img className='h-64 mr-16' src='/logo.png' />
            Фасады сысолы
          </Link>
          <div className='flex ml-auto sm:hidden'>
            <button onClick={handleClick} value={ANCHOR_FACADES} className='mx-16 inline-block font-medium md:hidden '>фасады</button>
            <button onClick={handleClick} value={ANCHOR_SERVICES} className='mx-16 inline-block font-medium md:hidden '>услуги</button>
            <button onClick={handleClick} value={ANCHOR_CONTACTS} className='mx-16 inline-block font-medium md:hidden '>как заказать</button>
            <Link to={PAGE_PRICES} className='mx-16 inline-block font-medium'>цены</Link>
            <a className='mx-16 inline-block font-medium' href='/'>8 800 700 24 24</a>
          </div>
        </div>
       </div>
    </div>
  )
}
export default Header
