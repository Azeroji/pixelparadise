import React from 'react'
import Image from 'next/image'

type Props = {}

const Work = (props: Props) => {
  return (
    <div id='Location' className='flex justify-center py-[5%]'>
      <div className='w-[85%] md:w-[60%] font-FiraCode flex flex-col gap-y-[20px] text-GRAY'>

        <div className='flex items-center gap-x-[20px] md:w-[50%]'>
          <p className='font-Poppins font-semibold text-white text-[20px] md:text-[28px]'>Location</p>
          <div className='border-t w-[50%] md:w-[70%] border-[#233554]'></div>
        </div>

        <div className='flex md:flex-row md:justify-between flex-col items-center md:gap-x-[5%] gap-y-[5%]'>

          <div className='flex w-[100%] md:w-[80%] items-center'>
              <ul className='flex flex-col gap-y-[10px] w-[45%]'>
                <li className='text-[white] py-[8px] rounded-[3px]'>Adress:</li>
                <li className='text-[white] py-[8px] rounded-[3px]'>Open hours:</li>
                <li className='text-[white] py-[8px] rounded-[3px]'>Number:</li>
              </ul>
              <ul className='flex flex-col gap-y-[10px] w-[45%]'>
                <li className='text-WHITE border border-WHITE px-[15px] py-[8px] rounded-[3px]'>Chem. Sidi Yahia, Hydra</li>
                <li className='text-WHITE border border-WHITE px-[15px] py-[8px] rounded-[3px]'>10 am - 12 am</li>
                <li className='text-WHITE border border-WHITE px-[15px] py-[8px] rounded-[3px]'>044 444 444</li>
              </ul>
            </div>

          <div className='h-[256px] w-[256px] md:w-[512px] md:h-[512px] border-[4px] border-BLUE rounded-[3px]'>
            <iframe
              width="100%"
              height="100%"
              className="overflow-hidden"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chem.%20Sidi%20Yahia,%20Hydra+(Pixel%20Paradise)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen={false}
            >
            </iframe>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Work