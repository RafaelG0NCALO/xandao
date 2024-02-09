import React from 'react'
import Carousel from '../Carousel';

const Section05 = () => {

  return (
    <div className='w-full bg-white flex items-stretch justify-center h-full py-10 px-5'>
        <div className='w-full max-w-[1440px] flex flex-col items-center'>
            <div className='w-full max-w-5xl text-center px-3'>
                <h1 className='text-4xl font-bold text-[#4F567B] pb-5'>FeedBacks</h1>
                <p className='text-lg text-[#01152A]'>
                Veja alguns feedbacks de nossos clientes e descubra como suas experiências positivas 
                destacam a qualidade dos nossos produtos e serviços.</p>
            </div>

            <div className='w-full relative mt-10'>
                <Carousel/>
            </div>

        </div>
    </div>
  )
}

export default Section05