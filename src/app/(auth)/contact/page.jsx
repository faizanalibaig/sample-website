import React from 'react'
import Image from 'next/image'

export const metadata={
  title:'Contact'
}

function Contact() {
  return (
    <div className='pr-40 pl-40 pt-32 pb-10 flex justify-center  h-auto flex-1'>
      <div className='border-r-2 p-10 h-52 '>
        <Image 
           src="/contact-mail.png"
           width={500}
           height={500}
           alt='Contact phone image'
        />
      </div>
      <div className='pl-10'>
        <h1 className='text-2xl font-bold pb-4'>Email</h1>
        <h6 className='font-medium text-lg'>riazfiaz6181@gmail.com</h6>
        <p className='text-lg'>
         "Your feedback and inquiries are invaluable to me, and I'm eager to connect with you. Whether you have questions about my work, want to discuss potential collaborations, or simply wish to say hello, I encourage you to reach out. You can contact me through the form below, and I'll make sure to respond promptly. Your thoughts and ideas are important, and I look forward to engaging in meaningful conversations. Thank you for considering reaching out, and I'm excited about the opportunity to connect with you!"</p>
      </div>
    </div>
  )
}

export default Contact