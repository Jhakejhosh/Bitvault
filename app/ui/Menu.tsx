import React from 'react'
import AuthButton from './AuthButton'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='hidden md:flex items-center'>
        <div className='text-white'>
          <Link href='/market'>Market</Link>
        </div>
        <div>
            <AuthButton/>
        </div>
    </div>
  )
}

export default Menu