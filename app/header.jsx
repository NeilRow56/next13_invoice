import Link from 'next/link'
import React from 'react'

export default function header() {
  return (
    <header className='bg-teal-700 text-white sticky top-0 z-10'>
        
        <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
            <h1 className='text-3xl font-medium'>
            <Link href="#hero">
                <span>🚀 Acme Rockets</span>
            </Link>
            </h1>
            <div className=''>
                  <button id="mobile-open-button" className='text-3xl sm:hidden focus:outline-none'>
                    &#9776;
                  </button>
                  <nav className='hidden sm:block space-x-8 text-xl' aria-label="main">
                    <Link href="#rockets" scroll={false} passHref  className='hover:opacity-80'>
                        Our Rockets
                    </Link>
                    <Link href='#testimonials' scroll={false}
                    className='hover:opacity-80'>
                        Testimonials
                    </Link>
                    <Link href='/#hashcontact' scroll={false} className='hover:opacity-80'>
                        Contact Us
                    </Link>

                  </nav>
            </div>
        </section>
        
    </header>
  )
}
