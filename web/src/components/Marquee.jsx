import React from 'react';
import cch from '../assets/cch.webp';
import fost from '../assets/fost.webp';
import funcef from '../assets/funcef.webp';
import hemobras from '../assets/hemobras.webp';
import repam from '../assets/repam.webp';
import sabin from '../assets/sabin.webp';
import vista from '../assets/vista.webp';

import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {

    const img =[
        {img: sabin},
        {img: cch},
        {img: fost},
        {img: funcef},
        {img: hemobras},
        {img: repam},
        {img: vista},
    ]

    return (
        <Marquee autoFill  className='flex overflow-hidden py-4'>
            {img.map((img, index)=>
              <div key={index} className='w-44 flex items-center justify-center h-20 rounded-md p-2 bg-[#1b1e3c] mx-5'>
                <img src={img.img} alt="" className='object-contain h-full' />
              </div>
            )}
        </Marquee>
    );
};

export default MarqueeComponent;
