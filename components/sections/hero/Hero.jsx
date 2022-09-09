import React from 'react'

export const Hero = () => {
    return (
        <section style={{ backgroundImage: `url('/images/hero_bg1.jpg')` }} className='h-[80vh] bg-cover w-full bg-[#94949487] bg-blend-multiply '>
            <div className='text-white bg-opacity-50 p-10 flex flex-col h-full justify-center gap-2'>
                <h1 className='text-8xl font-serif text-white'>Heich</h1>
                <h3 className='text-sm'>Get the comfort with your choice.</h3>
                <p className='text-xs tracking-wider text-gray-300'>Authentic Design. Comfortable. Replaceable.<br /><span className='text-sm text-white font-bold tracking-normal uppercase'>We care for you and your family</span></p>
                <button className=" bg-white hover:bg-gray-100 text-black font-bold mt-3 p-3 md:w-1/6 w-1/2 text-xs tracking-wide font-sans"
                >Explore</button>
            </div>
        </section >
    )
}
