import { assets } from '@/assests/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const sideMenuRef = useRef(null)
    const [isScroll, setIsScroll] = useState(false)

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50){
                setIsScroll(true)
            } else{
                setIsScroll(false)
            }
        })
    }, []) 
  return (
    <>
      <div className='fixed -z-10 top-0 right-0 w-11/12 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
      </div>
      <nav className={`flex w-full items-center justify-between fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadowwhite/20" : ""}`}>
        <a href='#top'>
            <Image src={ isDarkMode ? assets.logo_dark :assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
        </a>
        
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "shadow-sm bg-white/50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
            <li><a className='font-ovo' href='#top'>Home</a></li>
            <li><a className='font-ovo' href='#about'>About Me</a></li>
            <li><a className='font-ovo' href='#services'>Services</a></li>
            <li><a className='font-ovo' href='#work'>My Work</a></li>
            <li><a className='font-ovo' href='#contact'>Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button onClick={()=> setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon :assets.moon_icon} alt='' className='w-6'/>
            </button>

            <a className='font-ovo hidden lg:flex items-center gap-3 border border-gray-500 rounded-full px-4 py-2.5 ml-4 dark:border-white/50' href='#contact'>
                Connect
                <Image src={isDarkMode ? assets.arrow_icon_dark :assets.arrow_icon} alt='' className='w-3'/>
            </a>

            <button onClick={openMenu} className='block lg:hidden ml-3'>
                <Image src={isDarkMode? assets.menu_white :assets.menu_black} alt=''  className='w-6'/>
            </button>
        </div>

        {/* -------------mobile menu bar----------------- */}
        <ul ref={sideMenuRef} className='flex flex-col px-10 py-20 gap-4 transition duration-500 md:hidden w-64 fixed z-50 -right-64 top-0 bottom-0 h-screen bg-rose-50 dark:bg-darkHover dark:text-white'>
            <div onClick={closeMenu} className='absolute right-6 top-6'>
                <Image src={isDarkMode ? assets.close_white :assets.close_black} alt='' className='w-5 cursor-pointer'/>
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
