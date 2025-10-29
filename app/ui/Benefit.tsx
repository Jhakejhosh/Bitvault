import React from 'react'
import BenefitCard from './BenefitCard'

const Benefit = () => {
  return (
    <div className="min-h-auto w-full relative bg-black mt-12 lg:px-40 py-8">
    {/* Indigo Cosmos Background with Top Glow*/} 
    <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(45deg, transparent 49%, rgba(255, 255, 255, 0.15) , rgba(255, 255, 255, 0.15) , transparent 51%),
        linear-gradient(-45deg, transparent 49%, rgba(255, 255, 255, 0.15) , rgba(255, 255, 255, 0.15) , transparent 51%)
      `,
      backgroundSize: "40px 40px",
         WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
    }}
  />
  
    {/* Components */}
    <div className='relative'>
       <div className='flex justify-center items-center'>
          <span className='bg-white/5 py-2 px-6 rounded-full text-[14px] mb-4 backdrop-blur-md'>😍 What makes us unique?</span>
        </div>
       <h1 className='text-2xl font-bold'>Know Your Limit, Trade <span className='bg-clip-text 
      text-transparent bg-gradient-to-br from-blue to-purple'>Smarter</span></h1>
      <p className='text-gray-400 py-4 text-start md:text-center
      tracking-wide'><b className='text-white'>BitVault_lab</b> is an essential co-pilot in the volatile world of crypto designed to assist traders Calculate
      position risk and understand risk management. Beyond simply tracking cryptocurrencies, We provide powerful suite of <b className='text-white'>risk management tools</b> that clearly define your potential losses and gains before you make a trade and we also provide mathematical framework 
      for sustainable success</p>
      <BenefitCard/>
    </div>
  </div>
  )
}

export default Benefit