import React from 'react'
import MarketPageHeadline from '../ui/MarketPageHeadline'

export const dynamic = 'force-dynamic'

const page = async() => {
  
  return (
    <div className='pt-26 md:pt-30 text-white relative px-4'>
      <MarketPageHeadline/>
    </div>
  )
}

export default page