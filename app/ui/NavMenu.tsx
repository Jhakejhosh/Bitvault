import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface NavMenuType {
  id: number,
  label: string,
  link?: string,
  subLabel?: {
    label: string,
    text: string,
    link: string
  }[]
}

const navMenu: NavMenuType[] = [
  {
    id: 1,
    label: "Market",
    link: "/market",
  },
  {
    id: 2,
    label: "Tools",
    subLabel: [
      {
        label: "Position Size Calculator",
        text: "Calculate your position size",
        link: "/position"
      },
      {
        label: "Profit Simulator",
        text: "Simulate trading profit with fees",
        link: "/profitsimulator"
      },
      {
        label: "Win Rate Calculator",
        text: "Calculate your win rate",
        link: "/winrate"
      }
    ]
  }
] 

const NavMenu = ({closeNavbar}:any) => {

    const [isOpen, setIsOpen] = useState<string | null>(null);
    
      const handleMouseEnter = (label: string) => {
        setIsOpen(label);
      };
    
      const handleMouseLeave = () => {
        setIsOpen(null);
      };

  return (
    <div className='block md:flex items-center gap-8'>
        <ul className='text-white block md:flex justify-center items-center gap-4'>
          {
            navMenu.map(nav => {
              const {id, label, subLabel, link} = nav;
              return (
                <li key={id} className='relative group py-2 md:py-0' >
                  {
                    link ? (
                      <Link href={link} onClick={closeNavbar}>{label}</Link>
                    ):(
                      <div className='flex items-center cursor-pointer' onClick={() =>handleMouseEnter(label)}
                onMouseLeave={handleMouseLeave}>
                        <p>{label}</p>
                        <span>
                          {
                            isOpen === label ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>
                          }
                        </span>
                      </div>
                    )
                  }
                  {
                    subLabel && (
                      <ul className={`absolute w-70 ${isOpen === label ? "block" : "hidden"} md:bg-white/5
                      md:backdrop-blur-md p-4 mt-2 md:mt-8 rounded-md group-hover:block`}>
                        <h1 className='md:block hidden text-gray-400'>Calculators</h1>
                        {
                          subLabel.map(sub => {
                            const {label, text, link} = sub;
                            return (
                              <li key={label} className='p-3 hover:border-purple hover:border-1 rounded-md'>
                                <Link href={link} onClick={closeNavbar}>
                                  <p>{label}</p>
                                  <p className='text-gray-400 text-sm'>{text}</p>
                                </Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    )
                  }
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default NavMenu