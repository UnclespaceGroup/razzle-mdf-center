// packages
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Banner from 'components/Banner/Banner'
import BigSlider from 'components/BigSlider/BigSlider'
import HomeFacades from 'pages/PageHome/HomeFacades/HomeFacades'
import HomeServices from 'pages/PageHome/HomeServices/HomeServices'
import HowBuy from 'components/HowBuy/HowBuy'
import HomeAdvantages from 'pages/PageHome/HomeAdvantages/HomeAdvantages'

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
    <div className='pb-100'>
      <Banner {...banner} />
      <div className='mb-100' />
      <HomeFacades />
      <div className='mb-100' />
      <BigSlider slides={slides} />
      <div className='mb-100' />
      <HomeServices />
      <div className='mb-100' />
      <HomeAdvantages />
      <div className='mb-100' />
      <HowBuy />
    </div>
  )
}
export default PageHome
