import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavMenuType {
  id: number,
  label: string,
  link: string,
}

const navMenu: NavMenuType[] = [
  {
    id: 1,
    label: "Market",
    link: "/market",
  },
  {
    id: 2,
    label: "Calculator",
    link: "/position",
  },
  {
    id: 3,
    label: "Learn",
    link: "/risk",
  }
] 

const NavMenu = ({closeNavbar}:any) => {

  const pathname = usePathname();

  return (
    <div className='block md:flex items-center gap-8'>
        <ul className='text-white flex flex-col md:flex-row justify-center items-center gap-4'>
          {
            navMenu.map(nav => {
              const {id, label,link} = nav;
              return (
                <li key={id} className={`relative group py-2 ${pathname === link && 'border-b-2 border-purple'}
                hover:border-b-2 hover:border-purple`} >
                    <Link href={link} onClick={closeNavbar}>{label}</Link>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default NavMenu