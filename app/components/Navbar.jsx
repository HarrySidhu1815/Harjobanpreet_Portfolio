import { assets } from '@/assests/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  return (
    <>
      <div className='fixed -z-10'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
      </div>
      <nav className='flex w-full items-center justify-between fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50'>
        <a href='#top'>
            <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
        </a>
        
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50 bg-white '>
            <li><a className='font-ovo' href='#top'>Home</a></li>
            <li><a className='font-ovo' href='#about'>About Me</a></li>
            <li><a className='font-ovo' href='#services'>Services</a></li>
            <li><a className='font-ovo' href='#work'>My Work</a></li>
            <li><a className='font-ovo' href='#contact'>Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button>
                <Image src={assets.moon_icon} alt='' className='w-6'/>
            </button>

            <a className='font-ovo hidden lg:flex items-center gap-3 border border-gray-500 rounded-full px-4 py-2.5 ml-4' href='#contact'>
                Connect
                <Image src={assets.arrow_icon} alt='' className='w-4'/>
            </a>

            <button onClick={openMenu} className='block lg:hidden ml-3'>
                <Image src={assets.menu_black} alt=''  className='w-6'/>
            </button>
        </div>

        {/* -------------mobile menu bar----------------- */}
        <ul ref={sideMenuRef} className='flex flex-col px-10 py-20 gap-4 transition duration-500 md:hidden w-64 fixed z-50 -right-64 top-0 bottom-0 h-screen bg-rose-50'>
            <div onClick={closeMenu} className='absolute right-6 top-6'>
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
            </div>

            <li><a className='font-ovo' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#about'>About Me</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#services'>Services</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#work'>My Work</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
