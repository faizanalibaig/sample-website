import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins= Poppins({weight: ['300', '900'],subsets: ["latin"]})

function Header() {

  return (
    <header className={`p-12 flex items-center w-full h-36 {poppins.className}`} >
        <div className='mr-auto'>
       <Link href='/'>
           <Image 
           src="/ethereum.png" 
           alt="" 
            width={40} 
            height={40} 
            priority={false}
            />
        </Link> 
        </div>
        <div className='flex items-center'>
            <ul className='flex justify-center items-center'>
                <li className='mr-4 text-xl font-semibold'>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className='mr-4 text-xl font-semibold'>
                    <Link href="/about">About</Link>
                </li>
                <li className='mr-4 text-xl font-semibold'>
                    <Link href="/disclaimer" >Disclaimer</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header