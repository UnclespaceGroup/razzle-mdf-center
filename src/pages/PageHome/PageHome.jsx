// packages
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Banner from 'components/Banner/Banner'
import BigSlider from 'components/BigSlider/BigSlider'
import HomeFacades from 'pages/PageHome/HomeFacades/HomeFacades'
import HomeServices from 'pages/PageHome/HomeServices/HomeServices'
import HowBuy from 'components/HowBuy/HowBuy'

const PageHome = () => {
  const { data: banner } = useQuery(
    'banner-home',
    async () => {
      const { data } = await axios.get('api/banner.json')
      return data
    })

  const { data: slides } = useQuery(
    'home-slides',
    async () => {
      const { data } = await axios.get('api/home-slides.json')
      return data
    })

  return (
    <div className='pb-64'>
      <Banner {...banner} />
      <HomeFacades />
      <BigSlider slides={slides} />
      <HomeServices />
      <HowBuy />
    </div>
  )
}
export default PageHome
