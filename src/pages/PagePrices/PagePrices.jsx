// packages
import React from 'react'
import Banner from 'components/Banner/Banner'
import { useQuery } from 'react-query'
import axios from 'axios'
import _ from 'lodash'
import css from 'pages/PagePrices/pagePrices.module.css'
import cn from 'classnames'

const PagePrices = () => {
  const { data: banner } = useQuery(
    'banner-home',
    async () => {
      const { data } = await axios.get('api/prices-banner.json')
      return data
    })

  const { data: prices } = useQuery(
    'prices',
    async () => {
      const { data } = await axios.get('api/prices.json')
      return data
    })

  const { data: pricesInfo } = useQuery(
    'prices-info',
    async () => {
      const { data } = await axios.get('api/prices-info.json')
      return data
    })

  return (
    <div>
      <Banner {...banner} />
      <div className={cn('wrapper py-64 sm:overflow-auto', css.container)}>
        {_.map(prices, ({ title, categories }, key) => (
          <div key={key} className='w-2/3 md:w-full sm:w-full'>
            <h2>{title}</h2>
            {
              _.map(categories, ({ products, title: catTitle }, catKey) => (
                <div key={catKey}>
                  <h3>{catTitle}</h3>
                  <table className=''>
                    <thead>
                    <tr>
                      <th>Наименование</th>
                      <th>Цена, руб.</th>
                      <th>Срок, дней</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      _.map(products, (product, prodKey) => (
                        <tr key={prodKey}>
                          <td dangerouslySetInnerHTML={{ __html: product.title }}/>
                          <td>{product.price}</td>
                          <td>{product.term}</td>
                        </tr>

                      ))
                    }
                    </tbody>
                  </table>
                </div>
              ))
            }
          </div>
        ))}
      </div>
      <ul className='wrapper list pb-64'>
        {_.map(pricesInfo?.advantages, (item, key) => (
          <li key={key} className='text-24 mb-24'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PagePrices
