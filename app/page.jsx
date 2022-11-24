import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from'./header'


export default function HomePage() {
  return (
    <>
    <Header />
    <main className='max-w-4xl mx-auto '>
      <section id="hero" className='flex flex-col-reverse justify-center  sm:flex-row p-6 items-center gap-8 mb-12'>
        <article className='sm:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
            We Boldly Go <span className='text-indigo-700 dark:text-indigo-300'>Where No Rocket</span>  Has Gone Before...
          </h2>
          <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
            We&apos;re building rockets for the next century today. From the Moon to Mars, Jupiter and beyond...
            We&apos;re building rockets for the next century today. From the Moon to Mars, Jupiter and beyond...
          </p>
          <p className='max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400'>
          Think Acme Rockets.
          Think Acme Rockets.
          </p>

        </article>
        <Image className='w-1/2' src='/img/rocketdab.png' alt='Rocket Dab'  width={640} height={640} />

      </section>
      <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
      
      
      <section id="rockets"  className='p-6 my-12 scroll-mt-20'>
        <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
          Our Rockets
         
        </h2>
        <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center justify-center gap-8'>
          <li
                    className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                    <Image width={250} height={250} src="/img/rocketman.png" alt="Explorer" className="w-1/2 mb-6" />
                    <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
                    <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">£</p>
                    <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Affordable
                        Exploration</p>
          </li>
          <li
                    className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                    <Image width={250} height={250} src="/img/rocketride.png" alt="Adventurer" className="w-1/2 mb-6" />
                    <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
                    <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">££</p>
                    <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Best Selling
                        Rocket!</p>
                </li>
                <li
                    className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                    <Image width={250} height={250} src="/img/rocketlaunch.png" alt="Infinity" className="w-1/2 mb-6" />
                    <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
                    <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">£££</p>
                    <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Luxury Starship
                    </p>
                </li>

        </ul>

      </section>

      <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
      
     <section id="testimonials"
            class="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Testimonials
            </h2>
            <figure className="my-12">
                <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                    <p
                        className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                        Acme
                        has always been there
                        for me. Their Explorer rocket arrived in a wooden crate as expected.
                        Life-long customer! A++ shopping experience.
                    </p>
                </blockquote>
                <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                    &#8212;Wile E. Coyote, Genius
                </figcaption>
            </figure>
            <figure className="my-12">
                <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                    <p
                        className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                       The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several
                        occassions. <span class="italic">This makes me very, very angry!</span> Nevertheless, K-9
                        and I have awarded Acme the
                        Martian contract for space exploration rockets based on Acme&apos;s quality and sturdy designs
                    </p>
                </blockquote>
                <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                    &#8212;Wile E. Coyote, Genius
                </figcaption>
            </figure>
            <figure className="my-12">
                <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                    <p
                        className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                        I knew I not only wanted &#8212; <span class="italic">I needed</span> &#8212; Acme&apos;s Infinity
                        Rocket for my mission in space. Acme delivered in one day! Nothing says <q class="italic">Take
                            me
                            to your leader</q> like Acme&apos;s Infinity Rocket! 💯
                    </p>
                </blockquote>
                <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                    &#8212;Wile E. Coyote, Genius
                </figcaption>
            </figure>
            
      </section>      

      <hr className='mx-auto bg-black dark:bg-white w-1/2'/>

    </main>
    </>
  )
}
