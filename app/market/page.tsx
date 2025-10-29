import React from 'react'
import MarketPageHeadline from '../ui/MarketPageHeadline'
import { global_url, GlobalCryptoTypes, options } from '../lib/FetchApi'

const page = async() => {

   const data = await fetch(global_url, options);
    const text = await data.text();
    const globalData = JSON.parse(text)
    const global = globalData.data

  return (
    <div className='pt-26 md:pt-30 text-white relative px-4'>
      <MarketPageHeadline global={global}/>
    </div>
  )
}

export default page