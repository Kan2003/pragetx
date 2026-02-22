'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div>
      <div className='w-full py-1 sm:py-2 text-center bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm md:text-base'>
        Join Our Team - We are Hiring!
      </div>
      <nav className='bg-white dark:bg-gray-800 shadow-md'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='flex justify-center h-12 sm:h-16'>
            <div className='flex items-center space-x-2 sm:space-x-4'>
              <Link href="/" className={`px-2 sm:px-3 py-2 rounded-sm text-xs sm:text-sm font-bold transition duration-300 ${isActive('/') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
                Task 1
              </Link>
              <Link href="/task2" className={`px-2 sm:px-3 py-2 rounded-sm text-xs sm:text-sm font-bold transition duration-300 ${isActive('/task2') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
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
