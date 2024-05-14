'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link';

import { CiMenuFries } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'

type Props = {}

const Navbar = (props: Props) => {

  const [open, setOpen] = useState(false)

  return (
    <nav className='font-FiraCode'>

        <div className='flex justify-between items-center py-[7%] md:py-[25px] md:px-[3%] px-[10%]'>
          
          <Image
            src = '/images/logo.png'
            width={64}
            height={64}
            alt="Pixel Paradise"
          />

          <ul className='text-GRAY md:flex gap-x-[40px] items-center text-[15px] font-medium hidden'>
              <Link href="#About" className='hover:text-PINK cursor-pointer'>About</Link>
              <Link href="#Location" className='hover:text-BLUE cursor-pointer'>Location</Link>
              <Link href="#Contact" className='text-center text-PINK border border-PINK px-[15px] py-[8px] hover:bg-PINK hover:text-BG rounded-[3px]'>Contact</Link>
          </ul>
          
          <div className='block md:hidden'>
            { open ?  <IoMdClose size={30} onClick={()=>{ setOpen(false) }}/> : <CiMenuFries size={30} onClick={()=>{ setOpen(true) }}/> }
          </div>
        </div>

        { open && 
          <div className='w-[100%] md:hidden flex justify-center text-center bottom-[-200%] py-[20px] shadow-lg'>
            <div>
              <ul className='flex flex-col text-GRAY leading-[40px] items-center text-[15px] font-medium'>
                <Link href="#About" className='hover:text-PINK cursor-pointer'>About</Link>
                <Link href="#Location" className='hover:text-BLUE cursor-pointer'>Location</Link>
                <Link href="#Contact" className='text-center text-PINK border border-PINK px-[15px] py-[8px] hover:bg-PINK hover:text-BG rounded-[3px]'>Contact</Link>
             </ul>
            </div>
          </div>
          }

    </nav>
  )
}

export default Navbar