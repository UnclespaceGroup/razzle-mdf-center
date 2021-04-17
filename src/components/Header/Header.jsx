// packages
import React from 'react'
import { Link } from 'react-router-dom'
import css from './header.module.css'

const Header = () => {
  return (
    <div className='bg-white fixed left-0 top-0 w-full mt-64 border-solid border-0 border-gray-400 border-t-1 border-b-1 border-black'>
      <div className='font-medium wrapper h-80 flex items-center text-24'>
        <div className=''>Фасады сысолы</div>
        <div className='flex ml-auto'>
          <Link className='mx-16 inline-block font-regular' to='/'>как заказать</Link>
          <Link className='mx-16 inline-block font-regular' to='/'>как связаться</Link>
          <Link className={css.text} to='/'>как связаться</Link>
          <a className='mx-16 inline-block font-light' href='/'>8 800 700 24 24</a>
        </div>
      </div>
    </div>
  )
}
export default Header
