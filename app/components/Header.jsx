import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl h-screen flex flex-col items-center text-center mx-auto gap-4 justify-center'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: "spring", stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='w-32 rounded-full bg-white aspect-square'/>
      </motion.div>
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Harjobanpreet Singh Sidhu <Image className='w-6' src={assets.hand_icon} alt='' /></motion.h3>
      <motion.h1 
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>full stack web developer based in BC</motion.h1>
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.7}}
      className='max-w-2xl mx-auto font-ovo'>I am a full stack web developer from Abbotsford with 4 years of experience of making projects like Chat Application, AI Tool, E-commerce</motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}}
        className='flex gap-2 items-center px-10 py-3 rounded-full border border-white bg-black text-white dark:bg-transparent' href='#contact'>connect with me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1.2}}
        className='flex gap-2 items-center px-10 py-3 rounded-full border border-gray-500 bg-white dark:text-black' href='/Resume_Harjobanpreet_25.pdf' download>my resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
      </div>
    </div>
  )
}

export default Header
