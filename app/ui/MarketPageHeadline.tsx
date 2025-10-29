import React from 'react'
import { global_url, GlobalCryptoTypes, options } from '../lib/FetchApi'
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

const MarketPageHeadline = async() => {

  const data = await fetch(global_url, options);
  const globalData = await data.json();
  const global: GlobalCryptoTypes = globalData.data

  const {active_cryptocurrencies, total_market_cap, market_cap_change_percentage_24h_usd, markets, market_cap_percentage, total_volume} = global;

  const market_cap = Math.floor(total_market_cap.usd).toLocaleString();
  const volume = Math.floor(total_volume.usd).toLocaleString();
  const btc = market_cap_percentage.btc.toFixed(1)
  const eth = market_cap_percentage.eth.toFixed(1)
  const cap_percent = market_cap_change_percentage_24h_usd

  return (
    <div className='relative md:px-30 lg:px-40'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold md:text-3xl'>Cryptocurrency Prices by Market Cap</h1>
        <p className='text-gray-400
        py-2'>Track the real-time prices, market capitalization, and 24-hour trading volume for the top cryptocurrencies.🚀</p>
      </div>
      <div className='lg:flex justify-between items-center gap-4 my-6'>
        <div className='border-1 border-gray-700 rounded-[12px] py-6 px-4 w-full'>
          <h2 className='text-[20px] font-semibold mb-2'>${market_cap}</h2>
          <div className='text-gray-400 flex items-center gap-2'>
            Market Cap 
            <p className={`${cap_percent < 0 ? 'text-red-500' : 'text-green-500' } flex items-center`}>
              {cap_percent.toFixed(1)}%
              <span>{cap_percent < 0 ? <MdOutlineArrowDropDown/> : <MdOutlineArrowDropUp/> }</span>
            </p>
          </div>
        </div>

        <div className='border-1 border-gray-700 rounded-[12px] py-6 px-4 w-full'>
          <h2 className='text-[20px] font-semibold mb-2'>${volume}</h2>
          <div className='text-gray-400 flex items-center gap-2'>
            24h Trading Volume
          </div>
        </div>

        <div className='border-1 border-gray-700 rounded-[12px] py-6 px-4 w-full'>
          <h2 className='text-[20px] font-semibold mb-2 flex gap-4'><p>BTC {btc}%</p>  ETH {eth}%</h2>
          <div className='text-gray-400 flex items-center gap-2'>
            Dominance
          </div>
        </div>

        <div className='border-1 border-gray-700 rounded-[12px] py-6 px-4 w-full'>
          <h2 className='text-[20px] font-semibold mb-2'>${market_cap}</h2>
          <div className='text-gray-400 flex items-center gap-2'>
            Market Cap 
            <p className={`${cap_percent < 0 ? 'text-red-500' : 'text-green-500' } flex items-center`}>
              {cap_percent.toFixed(1)}%
              <span>{cap_percent < 0 ? <MdOutlineArrowDropDown/> : <MdOutlineArrowDropUp/> }</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MarketPageHeadline