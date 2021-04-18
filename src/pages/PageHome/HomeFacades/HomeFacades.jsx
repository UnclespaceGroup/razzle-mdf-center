// packages
import React from 'react'
import _ from 'lodash'
import CardFacade from 'components/CardFacade/CardFacade'
import { useQuery } from 'react-query'
import axios from 'axios'

const HomeFacades = () => {

  const { data: facadeList } = useQuery(
    'home-facades',
    async () => {
      const { data } = await axios.get('api/home-facades.json')
      return data
    })

  return (
    <div className='wrapper pb-64'>
      <ul className='mt-160 flex -mx-gutter flex-wrap'>
        {_.map(facadeList, (item, key) => (
          <li key={key} className='w-1/3 p-gutter sm:w-full'>
            <CardFacade {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomeFacades
