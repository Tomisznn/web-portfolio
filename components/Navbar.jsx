"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from "motion/react"

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' /> 
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex h-20 items-center justify-between z-50 ">
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14 ' />
        </a>

        
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-50 dark:bg-slate-800/60 dark:text-white'>
          <li><a href='#top'>Home</a></li>                
          <li><a href='#about'>About me</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'> 
          
          <button className='cursor-pointer p-2' onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='Theme Toggle' className='w-6'/>
          </button>

          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu' className='w-6'/>
          </button>
        </div>

        
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#111827] dark:text-white'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='Close' className='w-5 cursor-pointer' />
          </div>
          <li><a onClick={closeMenu} href='#top'>Home</a></li>                
          <li><a onClick={closeMenu} href='#about'>About me</a></li>
          <li><a onClick={closeMenu} href='#projects'>Projects</a></li>
          <li><a onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar