import React from 'react'
import AuthButton from './AuthButton'
import NavMenu from './NavMenu';

const Menu = ({closeNavbar}:any) => {

  return (
    <div className='hidden md:flex items-center gap-8'>
        <NavMenu/>
        <div onClick={closeNavbar}>
            <AuthButton/>
        </div>
    </div>
  )
}

export default Menu