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
         <img src={img2} alt="" className="w-96 top-28 h-full rounded-2xl object-cover" />
    </div>
  )
}

export default Meto