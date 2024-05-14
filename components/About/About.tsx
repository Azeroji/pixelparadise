import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='About' className='flex justify-center py-[7%]'>
      <div className='w-[85%] md:w-[60%] font-FiraCode flex flex-col gap-y-[20px] text-GRAY'>

        <div className='flex items-center gap-x-[20px] md:w-[50%]'>
          <p className='font-Poppins font-semibold text-white text-[20px] md:text-[28px]'>About us</p>
          <div className='border-t w-[50%] md:w-[70%] border-[#233554]'></div>
        </div>

        <div className='flex justify-between items-center gap-x-[5%]'> 
          <div className='flex flex-col gap-y-[20px]'>
          <p>Pixel Paradise is a gaming Cybercafe with a unique experience.</p>
          <p>It is a place for those who like to face off with a virtual opponent and chat with like-minded people, this is a club for fans of computer games and virtual reality!</p>
          <p>Important informations :</p>
          
          <div className='flex w-[100%] justify-around items-center'>
            <ul className='flex flex-col gap-y-[10px] w-[45%]'>
              <li className='text-[white] py-[8px] rounded-[3px]'>Location:</li>
              <li className='text-[white] py-[8px] rounded-[3px]'>Pricing:</li>
              <li className='text-[white] py-[8px] rounded-[3px]'>Open hours:</li>
            </ul>
            <ul className='flex flex-col gap-y-[10px] w-[45%]'>
              <li className='text-PINK border border-PINK px-[15px] py-[8px] rounded-[3px]'>Sidi Yahia - Alger</li>
              <li className='text-TXT border border-TXT px-[15px] py-[8px] rounded-[3px]'>250 DA/Hour</li>
              <li className='text-WHITE border border-WHITE px-[15px] py-[8px] rounded-[3px]'>10 am - 12 am</li>
            </ul>
          </div>

          </div>
          <Image className='lg:block hidden' src="/images/about.svg" alt="logo" width="512" height="512"/>
        </div>

      </div>
    </div>
  )
}

export default About