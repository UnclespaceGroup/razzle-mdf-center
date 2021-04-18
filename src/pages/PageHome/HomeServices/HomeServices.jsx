// packages
import React from 'react'
import _ from 'lodash'
import CardService from 'components/CardService/CardService'
import { useQuery } from 'react-query'
import axios from 'axios'

const HomeServices = () => {

  const { data: services } = useQuery(
    'home-services',
    async () => {
      const { data } = await axios.get('api/home-services.json')
      return data
    })

  return (
    <div className='wrapper pb-64'>
      <ul className='mt-160 flex flex-wrap'>
        {_.map(services, (item, key) => (
          <li key={key} className='w-1/3 p-40 sm:w-full sm:px-0 sm:py-24'>
            <CardService {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomeServices
