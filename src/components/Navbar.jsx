import React from "react"

const Navbar = () => {
  return (
    <>
       <div className="flex justify-between items-center text-black py-6 px-8 md:px-32  drop-shadow-xl">
        <h1 className="text-2xl font-bold">Eleva</h1>
        <ul className="flex xl:flex md:flex items-center gap-12 font-semibold text-base">
            <li><a className="box-shadow rounded-[25px] bg-white py-4  w-28 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/">Servicios</a></li>
            <li><a className="box-shadow rounded-[25px] bg-white py-4  w-28 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/contact">Blog</a></li>
            <li><a className="box-shadow rounded-[25px] bg-white py-4  w-28 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/about">Nosotros</a></li>
            <li><a className="box-shadow rounded-[25px] bg-white py-4  w-28 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/blog">Contacto</a></li>
        </ul>
       </div>
    </>
  )
}

export default Navbar