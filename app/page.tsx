
'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import CarAnimation from '@/component/CarAnimation';
import Slider from '@/component/Slider';

const page = () => {
  const [isDark, setIsDark] = useState(false);


  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${isDark ? 'bg-zinc-800' : 'bg-white'} w-full min-h-screen`}>
      <div className={`themeChanger py-4 sm:py-6 md:py-8 flex flex-col items-center w-full px-4 sm:px-6 md:px-8`}>
        <button onClick={toggleTheme} className='p-2 rounded-md'>
          <Image 
            src={isDark ? "/dark.svg" : "/Bright.svg"} 
            alt="Toggle theme" 
            width={150}
            height={40}
            className='cursor-pointer transition-transform duration-800 transform w-[100px] sm:w-[120px] md:w-[150px] h-auto' 
          />
        </button>
        
        <div className='word-break mt-4 sm:mt-6 md:mt-8 w-full px-4 sm:px-6 md:max-w-[800px]'>
          <h1 className={`mt-4 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase italiana-regular ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
            visuals that convert visitors into customers
          </h1>
        
        </div>
        
        <CarAnimation/>
        <Slider/>


      </div>
    </div>
  )
}

export default page
