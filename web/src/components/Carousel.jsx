import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import testmonials from '../assets/testmonials.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';

const Carousel = () => {

  return (
    <>
      <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex gap-3 space-x-3'>
                <img src={testmonials} alt="" className='w-11 h-11 rounded-full' />
                <div className='flex flex-col'>
                    <h1 className='text-md font-semibold text-[#0B132A]'>
                        Viezh Robert
                    </h1>
                    <p className='text-xs text-gray-500'>Warsaw, Poland</p>
                </div>
            </div>
            <p className='px-4 py-4'>
            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 space-x-3'>
                <img src={testmonials} alt="" className='w-11 h-11 rounded-full' />
                <div className='flex flex-col'>
                    <h1 className='text-md font-semibold text-[#0B132A]'>
                        Viezh Robert
                    </h1>
                    <p className='text-xs text-gray-500'>Warsaw, Poland</p>
                </div>
            </div>
            <p className='px-4 py-4'>
            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 space-x-3'>
                <img src={testmonials} alt="" className='w-11 h-11 rounded-full' />
                <div className='flex flex-col'>
                    <h1 className='text-md font-semibold text-[#0B132A]'>
                        Viezh Robert
                    </h1>
                    <p className='text-xs text-gray-500'>Warsaw, Poland</p>
                </div>
            </div>
            <p className='px-4 py-4'>
            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 space-x-3'>
                <img src={testmonials} alt="" className='w-11 h-11 rounded-full' />
                <div className='flex flex-col'>
                    <h1 className='text-md font-semibold text-[#0B132A]'>
                        Viezh Robert
                    </h1>
                    <p className='text-xs text-gray-500'>Warsaw, Poland</p>
                </div>
            </div>
            <p className='px-4 py-4'>
            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 space-x-3'>
                <img src={testmonials} alt="" className='w-11 h-11 rounded-full' />
                <div className='flex flex-col'>
                    <h1 className='text-md font-semibold text-[#0B132A]'>
                        Viezh Robert
                    </h1>
                    <p className='text-xs text-gray-500'>Warsaw, Poland</p>
                </div>
            </div>
            <p className='px-4 py-4'>
            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 space-x-3'>
                <img src={testmonials} alt="" className='w-11 h-11 rounded-full' />
                <div className='flex flex-col'>
                    <h1 className='text-md font-semibold text-[#0B132A]'>
                        Viezh Robert
                    </h1>
                    <p className='text-xs text-gray-500'>Warsaw, Poland</p>
                </div>
            </div>
            <p className='px-4 py-4'>
            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-3 space-x-3'>
                <img src={testmonials} alt="" className='w-11 h-11 rounded-full' />
                <div className='flex flex-col'>
                    <h1 className='text-md font-semibold text-[#0B132A]'>
                        Viezh Robert
                    </h1>
                    <p className='text-xs text-gray-500'>Warsaw, Poland</p>
                </div>
            </div>
            <p className='px-4 py-4'>
            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
            </p>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Carousel;
