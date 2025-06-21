import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            mohammadbayurizki22@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>
            © 2025 Mohammad Bayu Rizki. All rights reserved.
        </p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/siberbot88">Github</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/mohammad-bayu-rizki-5a728328b">LinkedIn</a></li>
            <li><a target='_blank' href="https://x.com/FreddyMarc0">Twitter</a></li>
            <li><a target='_blank' href="www.instagram.com/bayum0hmmd/">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
