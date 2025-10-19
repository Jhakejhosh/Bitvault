import Link from 'next/link';
import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

const SocialLink = () => {
  return (
    <div className='text-white flex justify-center items-center gap-2 text-2xl'>
        <Link href='https://x.com/Jhakejhosh'><RiTwitterXLine/></Link>
        <Link href='https://github.com/Jhakejhosh'><VscGithubAlt/></Link>
    </div>
  )
}

export default SocialLink