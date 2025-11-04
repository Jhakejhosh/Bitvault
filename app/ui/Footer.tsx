import React from 'react'
import CryptoMarquee from './CryptoMarquee'

const Footer = () => {
  return (
    <div className='fixed right-0 bottom-0 w-full z-50 text-white/80
    border-1 border-gray-700 bg-black text-[12px] px-2 py-1 md:px-10'>
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-0'>
            <CryptoMarquee/>
            <p className='text-center lg:text-start lg:px-6 px-4
            lg:w-[40%]'>©2025 Bitvault_Lab. Developed with ❤ Jacob Joshua</p>
        </div>
    </div>
  )
}

export default Footer