import React from 'react';
import 'styles/roboto/stylesheet.css';
import 'styles/global.css'
import useElasticResizer from 'utils/useElasticResizer'
import Routes from 'pages/Routes'
import Header from 'components/Header/Header'

const App = () => {
  useElasticResizer()

  return (
    <div>
      <Header />
      <Routes />
    </div>
  )
}

export default App;
