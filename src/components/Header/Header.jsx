// packages
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const scroll = () => {
  const scrollTop = window.scrollY
  const el = document.getElementById('header')

  if (scrollTop > 64) {
    el.classList.add('fixed')
  } else if (scrollTop < 64) {
    el.classList.remove('fixed')
  }
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
            <Link className='mx-16 inline-block font-medium' to='/'>как заказать</Link>
            <Link className='mx-16 inline-block font-medium' to='/'>как связаться</Link>
            <a className='mx-16 inline-block font-medium' href='/'>8 800 700 24 24</a>
          </div>
        </div>
       </div>
    </div>
  )
}
export default Header
