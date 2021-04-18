// packages
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { FaVk, FaPhone } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import _ from 'lodash'

const HowBuy = () => {
  const { data: contacts = {} } = useQuery(
    'contacts',
    async () => {
      const { data } = await axios.get('api/contacts.json')
      return data
    })

  const list = useMemo(() => [
    {
      icon: FaPhone,
      title: 'По номеру телефона',
      value: contacts.phone,
      link: `tel:${contacts.phone}`
    },
    {
      icon: FaVk,
      title: 'Группа ВКонтакте',
      target: '_blank',
      value: contacts.vk,
      link: contacts.vk
    },
    {
      icon: MdLocationOn,
      title: 'Придите к нам лично',
      value: contacts.address
    }
  ], [contacts])

  return (
    <div className='wrapper'>
      <h2 className='text-48 font-bold mb-40'>Для заказа свяжитесь с нами</h2>
      <ul>
        {_.map(list, item => (
          <li className='mb-40'>
            <a className='inline-flex items-center' href={item.link} target={item.target}>
              {item.icon && React.createElement(item.icon, { className: 'text-48 mr-24 text-black' })}
              <h3>
                <div className='text-18 mb-8'>{item.title}</div>
                <div className='text-32 font-bold'>{item.value}</div>
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HowBuy
