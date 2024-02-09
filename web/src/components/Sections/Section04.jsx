import React from 'react'
import alex from '../../assets/alex.png'
import raul from '../../assets/raul.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Section04 = () => {
  return (
    <div className='w-full bg-white flex items-stretch justify-center h-full py-10'>
        <div className='w-full max-w-[1440px] flex flex-col items-center px-5'>
            <div className='w-full max-w-5xl text-center px-3'>
                <h1 className='text-4xl font-bold text-[#4F567B] pb-5'>CONHEÇA OS FUNDADORES</h1>
                <p className='text-lg text-[#01152A]'>
                 A Agência Carcará oferece serviços integrados
                 em Tecnologia da Informação, Design Gráfico, Desenvolvimento de Aplicações WEB, 
                 Identidade Visual, Logo e Marca, Planejamento Estratégico para WEB e SEO, gerando 
                 resultados impactantes.</p>
            </div>
            <div className='flex gap-4 flex-wrap space-x-4 items-center mt-8 w-full max-w-7xl'>
                <div className='flex-1 min-w-[300px] flex justify-start'>
                    <LazyLoadImage effect='blur' src={alex} alt="" className='object-contain ' />
                </div>
                <div className='flex-1 min-w-[300px] flex justify-center flex-col'>
                    <h1 className='text-xl font-semibold text-[#4F567B] pb-5'>
                      ALEXANDRE AUGUSTO
                    </h1>
                    <p className='font-medium text-[#3F3F3F]'>
                     Minha missão central é ampliar significativamente a presença e visibilidade online
                     da sua empresa, utilizando planos e estratégias conceituais altamente eficazes.
                     Busco não apenas criar um simples site, mas sim proporcionar uma solução web
                     completa e inovadora para a sua empresa. Através de abordagens cuidadosamente 
                     elaboradas, meu objetivo é não apenas atrair visitantes, mas também transformá-los
                     em clientes potenciais, oferecendo assim oportunidades reais de crescimento e 
                     sucesso para o seu negócio no ambiente digital. Estou comprometido em desenvolver
                     uma presença online robusta e impactante, garantindo que sua empresa se destaque
                     de forma única e atraente no vasto cenário da internet.
                    </p>
                </div>
            </div>
            <div className='flex justify-between flex-wrap-reverse gap-4 space-x-4 items-center mt-8 w-full max-w-7xl'>
               
                <div className='flex-1 min-w-[300px] flex justify-center flex-col'>
                    <h1 className='text-xl font-semibold text-[#4F567B] pb-5'>
                      ALEXANDRE AUGUSTO
                    </h1>
                    <p className='font-medium text-[#3F3F3F]'>
                     Minha missão central é ampliar significativamente a presença e visibilidade online
                     da sua empresa, utilizando planos e estratégias conceituais altamente eficazes.
                     Busco não apenas criar um simples site, mas sim proporcionar uma solução web
                     completa e inovadora para a sua empresa. Através de abordagens cuidadosamente 
                     elaboradas, meu objetivo é não apenas atrair visitantes, mas também transformá-los
                     em clientes potenciais, oferecendo assim oportunidades reais de crescimento e 
                     sucesso para o seu negócio no ambiente digital. Estou comprometido em desenvolver
                     uma presença online robusta e impactante, garantindo que sua empresa se destaque
                     de forma única e atraente no vasto cenário da internet.
                    </p>
                </div>
                <div className='flex-1 min-w-[300px] flex justify-end'>
                    <LazyLoadImage effect='blur' src={raul} alt="" className='object-contain' />
                </div>
            </div>
    </div>
    </div>
  )
}

export default Section04