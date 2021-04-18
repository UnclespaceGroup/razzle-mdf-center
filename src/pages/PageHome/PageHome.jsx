// packages
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Banner from 'components/Banner/Banner'
import _ from 'lodash'
import CardFacade from 'components/CardFacade/CardFacade'
import BigSlider from 'components/BigSlider/BigSlider'
import CardService from 'components/CardService/CardService'

const PageHome = () => {
  const { data: banner } = useQuery(
    'banner-home',
    async () => {
      const { data } = await axios.get('api/banner.json')
      return data
    })

  const { data: facadeList } = useQuery(
    'home-facades',
    async () => {
      const { data } = await axios.get('api/home-facades.json')
      return data
    })

  const { data: slides } = useQuery(
    'home-slides',
    async () => {
      const { data } = await axios.get('api/home-slides.json')
      return data
    })

  const { data: services } = useQuery(
    'home-services',
    async () => {
      const { data } = await axios.get('api/home-services.json')
      return data
    })

  return (
    <div className='pb-64'>
      <Banner {...banner} />
      <div className='wrapper pb-64'>
        <ul className='mt-160 flex -mx-gutter flex-wrap'>
          {_.map(facadeList, (item, key) => (
            <li key={key} className='w-1/3 p-gutter sm:w-full'>
              <CardFacade {...item} />
            </li>
          ))}
        </ul>
      </div>
        <BigSlider slides={slides} />
      <div className='wrapper pb-64'>
        <ul className='mt-160 flex flex-wrap'>
          {_.map(services, (item, key) => (
            <li key={key} className='w-1/3 p-40 sm:w-full sm:px-0 sm:py-24'>
              <CardService {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default PageHome
