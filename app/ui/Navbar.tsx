"use client"

import React, { useState } from 'react'
import Logo from '../lib/Logo'
import Menu from './Menu'
import SocialLink from './SocialLink'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import AuthButton from './AuthButton'

const Navbar = () => {

  const[showNav, setShowNav] = useState<boolean>(false)

  return (
    <div className='flex w-full justify-center items-center relative z-40'>
        <nav className='py-4 px-4 md:px-20 top-4 w-[85%] rounded-full flex justify-between items-center
        bg-white/2 backdrop-blur-md fixed'>
            <div className='md:hidden'>
              <span className='text-white text-[20px]' onClick={()=>setShowNav(true)}>
                <HiBars3CenterLeft/>
              </span>
            </div>
            <Logo/>
            <Menu/>
            <div className='md:hidden'>
              <SocialLink/>
            </div>
        </nav>
        {
          showNav && (
          <div className='fixed w-full h-screen bg-black/80 backdrop-blur-md z-50 bottom-0 text-white
          md:hidden'>
            <div className='bg-black p-4 border-b-1 border-white/10 px-6'>
              <div className='flex justify-between items-center py-6'>
                <Logo/>
                <span className='font-bold text-[22px]' onClick={()=>setShowNav(false)}><RxCross1/></span>
              </div>
              <div className='my-6'>
                <AuthButton/>
              </div>
            </div>
          </div>
         )
        }
    </div>
  )
}

export default Navbar