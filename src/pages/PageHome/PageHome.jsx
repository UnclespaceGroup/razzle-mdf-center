// packages
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Banner from 'components/Banner/Banner'

const PageHome = () => {
  const { data: banner } = useQuery(
    'banner-home',
    async () => {
      const { data } = await axios.get('api/banner.json')
      return data
    }
  )

  return (
    <div>
      <Banner {...banner} />
    </div>
  )
}
export default PageHome
