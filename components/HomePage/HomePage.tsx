import React from 'react'
import Link from 'next/link'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='flex justify-center pt-[20%] pb-[35%] md:py-[10%]'>
      <div className='w-[85%] xl:w-[60%] flex flex-col gap-y-[20px]'>
        <p className='text-GRAY font-FiraCode leading-none'>Welcome to</p>
        <p className='text-TXT font-Poppins font-semibold text-[32px] md:text-[60px] leading-none'>Pixel Paradise</p>
        <p className='text-GRAY font-Poppins font-semibold text-[32px] md:text-[60px] leading-none'>The best <span className='text-PINK'>Gaming Cybercafe</span>.</p>
        <p className='text-GRAY font-FiraCode w-[60%]'>Join us and enjoy a unique gaming experience</p>
        <Link href="#Contact" className='text-center hover:text-PINK font-FiraCode border border-PINK px-[15px] py-[8px] hover:bg-BG bg-PINK text-BG rounded-[3px] w-[150px] font-medium mt-[5%]'>Contact us</Link>
      </div>
    </div>
  )
}

export default HomePage