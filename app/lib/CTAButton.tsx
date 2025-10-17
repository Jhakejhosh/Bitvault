import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

interface ButtonPropType {
    label: string;
    className: string;
    href: string;
    icon: IconType
}

const CTAButton = ({label, className, href, icon}:ButtonPropType) => {
  const IconElement = icon
  return (
    <Link href={href} className={`${className} flex items-center gap-2 py-3 px-4 rounded-md font-medium justify-center text-[15px]`}>
        <IconElement/>{label}
    </Link>
  )
}

export default CTAButton