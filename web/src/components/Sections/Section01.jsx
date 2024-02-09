import React, { useState } from 'react'
import banner from '../../assets/10anos.jpeg'
import MarqueeComponent from '../Marquee'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

const Section01 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    setFormSubmitted(true);
    try {
      const response = await fetch('https://formsubmit.co/wishprimesuporte@gmail.com', {
        method: 'POST',
        body: formData,
      });

      console.log('Resposta do servidor:', response);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <div className='w-full bg-[#14172C] relative'>
      <div className='w-full gap-10 max-md:gap-1 pt-20 max-lg:flex-wrap-reverse flex  max-w-[1440px] m-auto'>

        <div className='flex max-md:items-center w-full max-w-320px flex-col px-6 p-3 justify-center'>
          <div className='px-2'>
            <div className='text-lg pb-3 font-semibold text-gray-400'>Publicidade e marketing digital 🔥</div>
            <h1 className='text-5xl max-lg:text-3xl font-bold text-white'>
              Fábrica  de <br />  Autoridades
              <span className='bg-gradient-to-r px-3 from-[#4249E7]  to-[#E5BB28] text-transparent bg-clip-text'>
                Digitais
              </span>
            </h1>
            <p className='w-full pt-5 max-w-lg text-gray-400'>
              Estúdio surpreendente para você produzir vídeos curtos e programas de Podcast,
              para aumentar sua autoridade e com isso turbinando suas vendas e resultados em Brasília
            </p>
            {formSubmitted ? (
          <div className='bg-green-500 mt-10 p-4 rounded-md text-white text-center'>
            <p>Enviado com sucesso!</p>
          </div>
        ) : (

            <form onSubmit={handleSubmit}  className='w-full max-w-lg max-lg:max-w-none'>
              <input
                type="text"
                required
                name="name"
                className='h-14 w-full p-5 text-gray-100 rounded-md mt-4 border-2 border-[#BFBFBF] bg-[#14172C]'
                placeholder="Nome"
              />
              <input
                type="text"
                required
                name="email"
                className='h-14 w-full p-5 text-gray-100 rounded-md mt-4 border-2 border-[#BFBFBF] bg-[#14172C]'
                placeholder="Email"
              />
              <input type="hidden" name="_next" value="index.html"/>
                <input type="hidden" name="_captcha" value="false"/>
              <button
                type="submit"
                className='h-11 text-lg font-medium w-36 mb-2 bg-[#4058AC] flex items-center justify-center rounded-md text-gray-100 mt-4'
              >
                Enviar
              </button>
            </form>
                 )}
          </div>
        </div>

        <div className='w-full overflow-hidden rounded-tl-[60px] ml-2 relative'>
          <LazyLoadImage effect="blur" src={banner} alt="" className='w-full h-full object-cover' />
          <div className='bg-gradient-to-t to-transparent from-[#14172C] absolute bottom-0 h-1/4 left-0 w-full' />
          <div className='bg-gradient-to-l to-transparent from-[#14172c] absolute bottom-0 h-full right-0 w-1/4' />
        </div>
      </div>

      <div className='px-3 w-full max-w-[1440px] m-auto'>
        <h1 className='text-lg flex items-center font-medium text-white m-auto w-full max-w-[1440px]'>
          <div className='h-4 w-1 bg-[#4249E7] flex mr-2'/>Conheca nossos clientes
        </h1>
        <MarqueeComponent />
      </div>

    </div>
  )
}

export default Section01