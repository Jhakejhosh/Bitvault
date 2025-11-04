import React from 'react'
import MarketPageHeadline from '../ui/MarketPageHeadline'
import MarketPageCryptoPrices from '../ui/MarketPageCryptoPrices'

export const dynamic = 'force-dynamic'

const page = async() => {
  
  return (
    <div className='pt-26 md:pt-30 text-white relative px-4 pb-12'>
      <MarketPageHeadline/>
      <MarketPageCryptoPrices/>
    </div>
  )
}

export default page