import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/global.css'
import useElasticResizer from 'utils/useElasticResizer'

const App = () => {
  useElasticResizer()

  return (
    <div className='text-center bg-red mt-100 text-16'>
      <div className='sm:hidden md:hidden'>desktop</div>
      <div className='lg:hidden sm:hidden'>tablet</div>
      <div className='lg:hidden md:hidden'>mobile</div>
    </div>
  )
}

export default App;
