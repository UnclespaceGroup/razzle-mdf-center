// packages
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-white fixed left-0 top-0 w-full mt-64 border-solid border-0 border-gray-400 border-t-1 border-b-1 border-black'>
      <div className='wrapper h-80 flex items-center text-24'>
        <div className='font-bold'>Фасады сысолы</div>
        <div className='flex ml-auto sm:hidden'>
          <Link className='mx-16 inline-block font-medium' to='/'>как заказать</Link>
          <Link className='mx-16 inline-block font-medium' to='/'>как связаться</Link>
          <a className='mx-16 inline-block font-medium' href='/'>8 800 700 24 24</a>
        </div>
      </div>
    </div>
  )
}
export default Header
