import React from 'react'
import Logo from '../lib/Logo'

const Navbar = () => {
  return (
    <div className='flex w-full justify-center items-center fixed z-40'>
        <nav className='py-4 px-20 relative top-4 w-[85%] rounded-full 
        bg-white/2 backdrop-blur-md '>
            <Logo/>
        </nav>
    </div>
  )
}

export default Navbar