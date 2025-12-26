

import React from 'react'
import Marquee from 'react-fast-marquee'
import { getCryptoData } from '../lib/FetchApi'

export const revalidate = 60;

const CryptoMarquee = async() => {

    const cryptos = await getCryptoData()

  return (
    <>
      <Marquee direction="right" speed={20} pauseOnHover>
        {
            cryptos?.map(crypto => {
                const {id, symbol, price_change_percentage_24h, current_price} = crypto;
                const percentage_change = price_change_percentage_24h&&price_change_percentage_24h?.toFixed(1);
                return (
                    <div key={id} className='mx-4 flex items-center gap-2'>
                        <p>{symbol.toLocaleUpperCase()}</p>
                        <p className={`${price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500' }`}>
                            {percentage_change}%
                        </p>
                        <p className='text-gray-400'>{current_price}</p>
                    </div>
                )
            })
        }
      </Marquee>
    </>
  )
}

export default CryptoMarquee