import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  return (
    <div>
      <div className='w-full py-1 sm:py-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm md:text-base'>
        Join Our Team - We are Hiring!
      </div>
      <nav className='bg-white dark:bg-gray-800 shadow-md'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='flex justify-center h-12 sm:h-16'>
            <div className='flex items-center space-x-2 sm:space-x-4'>
              <Link href="/" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-bold transition duration-300'>
                Task 1
              </Link>
              <Link href="/task2" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-bold transition duration-300'>
                Task 2
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
