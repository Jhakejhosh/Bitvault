import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
        <h1 className='text-white font-extrabold tracking-tighter'>BITVAULT
            <b className='bg-clip-text text-transparent bg-gradient-to-b from-blue to-purple'><i>_L</i>AB</b></h1>
    </Link>
  )
}

export default Logo