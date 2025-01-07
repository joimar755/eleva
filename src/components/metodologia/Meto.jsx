import React from 'react'
import img2 from '../../assets/img/agencia.png'

const Meto = () => {
  return (
    <div className="relative mt-80 border-b border-neutral-800  bg-white rounded-2xl">
         <div className="flex flex-col items-center text-center py-12">
           <h1 className="text-8xl text-black font-sans  p-8  ">Crecemos Contigo a Cada Paso</h1>
           <p className="text-[23px] leading-[33.76px] text-black mt-4 text-lg max-w-2xl">
           Entendemos que el desarrollo de productos innovadores y de alta calidad es la clave para que 
           tu marca se destaque. Nos enfocamos en ayudarte a crear productos que no 
           solo satisfagan las necesidades de tu comunidad, sino que también resuenen con sus valores y expectativas.
           por esta razon creamos conversaciones reales con tu comunidad.
           </p>
         </div>
         <div className='relative mt-8'>
            <img src={img2} alt="" className="w-[450px] top-28 h-full rounded-2xl object-cover" />
            <div class="absolute top-full right-4 md:right-[465px] shadow-whit transform -translate-y-1/2 bg-slate-600 p-5 rounded-3xl py-5 -mt-[120px] w-96 flex flex-col items-center gap-6">
             <p className="text-white  text-lg max-w-2xl">
             Escalamos el resultado de tu proyecto hasta donde lo quieras llevar. El cielo es el límite.
             </p>
            </div>
         </div>
         
         
    </div>
  )
}

export default Meto