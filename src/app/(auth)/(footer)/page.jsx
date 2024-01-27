import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='flex pr-10 pl-10 pt-10 pb-10 sticky top-full'>
        <div className='mr-auto'>
             <h3>Copyright © 2024 Dev Solucions Inc.</h3>
        </div>

        <div className='flex'>
            <h3 className='mr-4'>
                Created by Faizan Ali with 
            </h3>
            <Image 
           src="/love-hand-drawn-heart-symbol-outline.png" 
           alt="" 
            width={20} 
            height={20} 
            priority={false}
            />
        </div>
    </footer>
  )
}

export default Footer