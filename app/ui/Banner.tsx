import React from 'react'
import { FcCalculator } from "react-icons/fc";
import { BsLightningCharge } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';

const Banner = () => {
  return (
    
    <div className="min-h-screen w-full relative text-center"
    style={{
        background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%), #000000",
      }}>
     <div
      className="absolute inset-0 z-0"
      style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  ></div>
     {/* Your Content/Components*/}
     <div className='pt-30 md:pt-36 z-30 text-white relative px-3'>
      <div className='text-[12px] md:text-[14px] bg-black p-2 lg:mx-150 mx-10
      rounded-full border-1 border-gray-700 relative'>
        <span className='flex justify-center items-center gap-2'>
          <span className='text-yellow-700 text-[16px]'><BsLightningCharge/></span>
          <p>Calculate position risk</p>
          <Link href='/' className='text-[16px]'><HiArrowLongRight/></Link>
        </span>
      </div>
      <h1 className='font-bold text-[45px] md:text-[65px]
      md:tracking-normal md:leading-25'>Master Crypto Risk, <p className='text-3xl md:text-5xl font-semibold'>Trade With <b className='bg-clip-text 
      text-transparent bg-gradient-to-br from-blue to-purple'>Discipline</b></p></h1>
      <h6 className='text-gray-400 py-7 md:text-[18px] tracking-wide'>Stop guessing. Define your position size and maximum loss 
        <p>before you enter the market.</p></h6>
     </div>
</div>
  )
}

export default Banner