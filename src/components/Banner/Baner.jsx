import React from 'react'
import img1 from '../../assets/img/home.jpg'

const Baner = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[600px] relative">
        <div className="absolute w-full h-full flex flex-col justify-end items-center">
            <h1 className="px-4 text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Somos <span className="text-blue-300">eleva!!</span></h1>
            <p class="px-4 text-center text-3xl sm:text-5xl md:text-6xl lg:text-4xl py-10 font-serif text-gray-100 ">Agencia desarrollo de productos</p>

        </div>
        <img src={img1} alt="" className="w-full h-full rounded-2xl object-cover" />
      </div>
    </div>

    
  )
}

export default Baner