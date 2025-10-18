import React from 'react'
import { GrLogin } from "react-icons/gr";

const AuthButton = () => {
  return (
    <div className='bg-white/15 text-white/55 flex justify-center items-center
    py-2 px-4 rounded-full gap-2 cursor-pointer hover:bg-white/20 hover:text-white/60'>
        <span><GrLogin/></span>
        <p className='font-light'>Login</p>
    </div>
  )
}

export default AuthButton