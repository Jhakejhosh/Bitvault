import React from 'react'
import AuthButton from './AuthButton'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='hidden md:flex items-center gap-8'>
        <div className='text-white flex justify-center items-center gap-4'>
          <Link href='/market'>Market</Link>
          <div>Tools</div>
        </div>
        <div>
            <AuthButton/>
        </div>
    </div>
  )
}

export default Menu