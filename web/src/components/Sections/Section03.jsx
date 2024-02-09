import React from 'react';
import charticon from '../../assets/charticon.png'
import lapicon from '../../assets/lapicon.png'
import videoicon from '../../assets/videoicon.png'
import penicon from '../../assets/penicon.png'
import socialicon from '../../assets/socialicon.png'
import payicon from '../../assets/payicon.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const Section03 = () => {
  return (
    <div className='w-full bg-[#14172C]'>
      <div className="w-full max-w-[1440px] bg-[url('./assets/background.png')] bg-contain min-h-[720px] flex flex-col justify-center bg-right bg-no-repeat m-auto p-4 relative">
      
        <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-4 items-center'>
          <div className='h-52 flex flex-col p-4 justify-center bg-[#1E2242] rounded-md m-2'>
            <LazyLoadImage effect='blur' src={charticon} alt="" className='w-14 mb-4' />
            <p className='font-medium text-xl text-white'>
            Otimização para Mecanismos de Busca
            </p>
          </div>
          <div className='h-52 flex flex-col p-4 justify-center bg-[#1E2242] rounded-md m-2'>
            <LazyLoadImage effect='blur' src={lapicon} alt="" className='w-14 mb-4' />
            <p className='font-medium text-xl text-white'>
            Design e Desenvolvimento de Sites
            </p>
          </div>
          <div className='flex flex-col justify-center p-5 max-md:order-first col-span-2 max-sm:col-span-1 h-full'>
            <h1 className='text-white text-3xl font-semibold'>Nossa Expertise em Marketing Digital</h1>
            <p className='text-lg text-[#ABABAB]'>
            Transformamos suas ideias em conteúdo impactante. Nossa FABRICA DE AUTORIDADES é ideal para
            quem está começando e busca conforto e eficiência frente às câmeras.</p>
          </div>
        </div>

        <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-4 items-center'>
          <div className='h-52 flex flex-col p-4 justify-center bg-[#1E2242] rounded-md m-2'>
            <LazyLoadImage effect='blur' src={videoicon} alt="" className='w-14 mb-4' />
            <p className='font-medium text-xl text-white'>
            Edição e Produção de Vídeos
            </p>
          </div>
          <div className='h-52 flex flex-col p-4 justify-center bg-[#1E2242] rounded-md m-2'>
            <LazyLoadImage effect='blur' src={penicon} alt="" className='w-14 mb-4' />
            <p className='font-medium text-xl text-white mb-5'>
            Redação de Conteúdo
            </p>
          </div>
          <div className='h-52 flex flex-col p-4 justify-center bg-[#1E2242] rounded-md m-2'>
            <LazyLoadImage effect='blur' src={socialicon} alt="" className='w-14 mb-4' />
            <p className='font-medium text-xl text-white'>
            Social media Marketing
            </p>
          </div>
          <div className='h-52 flex flex-col p-4 justify-center bg-[#1E2242] rounded-md m-2'>
            <LazyLoadImage effect='blur' src={payicon} alt="" className='w-10 mb-4' />
            <p className='font-medium text-xl text-white'>
            Pay per click (PPC)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section03;
