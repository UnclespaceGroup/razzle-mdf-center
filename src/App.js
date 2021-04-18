import React from 'react';
import 'styles/roboto/stylesheet.css';
import 'styles/global.css'
import useElasticResizer from 'utils/useElasticResizer'
import Routes from 'pages/Routes'
import Header from 'components/Header/Header'
import { QueryClient, QueryClientProvider } from 'react-query'
import Footer from 'components/Footer/Footer'

const queryClient = new QueryClient()

const App = () => {
  useElasticResizer()

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <Routes />
        <Footer />
      </>
    </QueryClientProvider >
  )
}

export default App;
