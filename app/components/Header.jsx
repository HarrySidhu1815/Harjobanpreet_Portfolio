import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl h-screen flex flex-col items-center text-center mx-auto gap-4 justify-center'>
      <div>
        <Image src={assets.profile_img} alt='' className='w-32 rounded-full'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm William Mark <Image className='w-6' src={assets.hand_icon} alt='' /></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>full stack web developer based in BC</h1>
      <p className='max-w-2xl mx-auto font-ovo'>I am a full stack web developer from Abbotsford with 4 years of experience of making projects like Chat Application, AI Tool, E-commerce</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a className='flex gap-2 items-center px-10 py-3 rounded-full border border-white bg-black text-white dark:bg-transparent' href='#contact'>connect with me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
        <a className='flex gap-2 items-center px-10 py-3 rounded-full border border-gray-500 bg-white dark:text-black' href='/sample-resume.pdf' download>my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header
