import React from 'react'
import camIcon from '../../assets/camIcon.png'
import chatIcon from '../../assets/chatIcon.png'
import usersIcon from '../../assets/UsersIcon.png'
import wave from '../../assets/wave.png'

const Section02 = () => {
  return (
    <div className='w-full bg-white flex items-stretch justify-center h-full py-10'>
        <div className='w-full max-w-[1440px] flex flex-col items-center'>

            <div className='w-full max-w-4xl text-center px-3'>
                <h1 className='text-5xl font-bold text-[#4F567B] pb-5'>Nosso Projeto</h1>
                <p className='text-lg text-[#01152A]'>Conheça os diferenciais do "Estúdio Fábrica de Autoridades Digitais"
                em Brasília. Alugue nosso estúdio para produzir vídeos e podcasts, 
                destacando-se no ambiente digital com as ferramentas necessárias.</p>
            </div>

            <div className='mt-20 w-full px-10'>
                <div className='flex max-lg:flex-col justify-between w-full max-w-7xl m-auto items-center'>
                    <div className='w-full max-lg:max-w-lg max-w-[250px] h-96 relative text-center flex justify-center flex-col items-center'>
                        <div className='w-24 h-24 absolute z-20 top-0 rounded-lg bg-[#efefef] flex items-center justify-center'>
                            <img src={camIcon} alt="" />
                        </div>
                        <img src={wave} alt="" className='absolute max-lg:hidden z-0 top-14 left-56 w-full -translate-y-10' />
                        <h1 className='text-lg font-semibold py-5'>PRODUÇÃO DE VÍDEOS</h1>
                        <p>A Fábrica de Autoridades Digitais inova ao criar vídeos simulando podcasts, proporcionando uma apresentação envolvente e acessível para plataformas digitais.</p>
                    </div>

                    <div className='w-full max-lg:max-w-lg max-w-[250px] h-96 relative text-center flex justify-center flex-col items-center'>
                        <div className='w-24 h-24 absolute z-20 top-0 rounded-lg bg-[#efefef] flex items-center justify-center'>
                            <img src={chatIcon} alt="" />
                        </div>
                        <h1 className='text-lg font-semibold py-5'>PRODUÇÃO DE VÍDEOS</h1>
                        <p>A Fábrica de Autoridades Digitais inova ao criar vídeos simulando podcasts, proporcionando uma apresentação envolvente e acessível para plataformas digitais.</p>
                    </div>

                    <div className='w-full max-lg:max-w-lg max-w-[250px] h-96 relative text-center flex justify-center flex-col items-center'>
                        <div className='w-24 h-24 absolute z-20 top-0 rounded-lg bg-[#efefef] flex items-center justify-center'>
                            <img src={usersIcon} alt="" />
                        </div>
                        <img src={wave} alt="" className='absolute max-lg:hidden z-0 top-14 right-56 w-full -translate-y-10' />
                        <h1 className='text-lg font-semibold py-5'>PRODUÇÃO DE VÍDEOS</h1>
                        <p>A Fábrica de Autoridades Digitais inova ao criar vídeos simulando podcasts, proporcionando uma apresentação envolvente e acessível para plataformas digitais.</p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <a href='https://agenciacarcara.com.br' className='flex items-center justify-center w-40 h-12 rounded-md bg-[#4058AC] text-white'>Saiba mais</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Section02