import React from 'react'
import { GrLineChart } from "react-icons/gr";
import { BsLightningCharge, BsCalculator } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';
import CTAButton from '../lib/CTAButton';
import Benefit from './Benefit';

const Banner = () => {
  return (
    <div className="min-h-screen w-full relative text-center md:px-20"
    style={{
        background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%), #000000",
      }}>
     <div
      className="absolute inset-0 z-0"
      style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.2) 0.5px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0.5px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  ></div>
     {/*Components*/}
     <div className='pt-26 md:pt-36 z-30 text-white relative px-6'>
      <div className='flex justify-center items-center mb-3
       relative'>
        <span className='text-[14px] bg-black flex justify-center
        rounded-full items-center gap-2 py-2 px-4'>
          <span className='text-yellow-700 text-[16px]'><BsLightningCharge/></span>
          <p>Calculate position risk</p>
          <Link href='/' className='text-[16px]'><HiArrowLongRight/></Link>
        </span>
      </div>
      <h1 className='font-bold text-[45px] md:text-[65px] lg:px-40
      md:tracking-normal md:leading-25'>Master Crypto Risk <p className='text-3xl md:text-5xl 
      font-semibold tracking-tight'>Trade With <span className='bg-clip-text 
      text-transparent bg-gradient-to-br from-blue to-purple'>Discipline</span></p></h1>
      <h6 className='text-gray-400 pt-6 pb-8 md:text-[18px] tracking-wide'>Stop guessing. Define your position size and maximum loss 
        <p>before you enter the market.</p></h6>

        {/***CTA Button***/}
        <div className='px-12 md:flex justify-center items-center gap-4'>
          <CTAButton className='bg-white text-black hover:bg-white/95
          mb-6 md:mb-0' label='Start Calculating' href='/calculator' icon={BsCalculator}/>
          <CTAButton className='bg-white/7 backdrop-blur-md hover:bg-white/10' label='Track Cryptos' href='/market' icon={GrLineChart}/>
        </div>

        {/**Benefit section **/}
        <Benefit/>
     </div>
</div>
  )
}

export default Banner