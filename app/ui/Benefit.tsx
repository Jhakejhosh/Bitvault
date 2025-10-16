import React from 'react'

const Benefit = () => {
  return (
    <div className="min-h-auto w-full relative bg-black mt-20 lg:px-40 py-8">
    {/* Indigo Cosmos Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
    <div className='relative'>
       <div className='flex justify-center items-center'>
          <span className='bg-white/5 py-2 px-6 rounded-full text-[14px] my-6'>😍 What makes us unique?</span>
        </div>
       <h1 className='text-3xl font-bold'>Know Your Limit, Trade <span className='bg-clip-text 
      text-transparent bg-gradient-to-br from-blue to-purple'>Smarter</span></h1>
      <p className='text-gray-400 py-4
      tracking-wide'><b className='text-white'>BitVault_lab</b> is an essential co-pilot in the volatile world of crypto designed to assist traders Calculate
      position risk and understand risk management. Beyond simply tracking cryptocurrencies, We provide powerful suite of <b className='text-white'>risk management tools</b> that clearly define your potential losses and gains before you make a trade and we also provide mathematical framework 
      for sustainable success</p>
    </div>
  </div>
  )
}

export default Benefit