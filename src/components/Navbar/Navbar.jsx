import React, { useState } from "react"
import { CgMenuRightAlt } from "react-icons/cg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //console.log(isOpen)
  
  return (
    <>
      <nav className="relative top-0 right-0 w-full z-50  sm:py-0">
      <div className="relative">
      <div className="flex justify-between items-center text-black py-6 px-8 md:px-32  drop-shadow-xl">
        <h1 className="text-5xl font-extrabold">Eleva</h1>
        <ul className="hidden  lg:flex  items-center gap-12 font-semibold text-base">
            <li><a className="box-shadow rounded-[25px] bg-white py-4  w-28 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/">Servicios</a></li>
            <li><a className="box-shadow rounded-[25px] bg-white py-4  w-28 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/contact">Blog</a></li>
            <li><a className="box-shadow rounded-[25px] bg-white py-4  w-28 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/about">Nosotros</a></li>
            <li><a className="box-shadow rounded-[25px] bg-white py-4  w-28 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/blog">Contacto</a></li>
        </ul>
        <div className="lg:hidden block text-5xl cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
           <CgMenuRightAlt />
        </div>
        <div className={`absolute  lg:hidden top-24 left-0 w-full h-full  flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform 
          ${isOpen ? "opacity-100 z-20" : "opacity-0 pointer-events-none z-[-1]"}`}>
            <li className="list-none"><a className="box-shadow rounded-[25px] bg-white py-4  w-96 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/">Servicios</a></li>
            <li className="list-none"><a className="box-shadow rounded-[25px] bg-white py-4  w-96 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/contact">Blog</a></li>
            <li className="list-none"><a className="box-shadow rounded-[25px] bg-white py-4  w-96 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/about">Nosotros</a></li>
            <li className="list-none"><a className="box-shadow rounded-[25px] bg-white py-4  w-96 text-black text-center inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/blog">Contacto</a></li>
        </div>
       </div>
      </div>
      </nav>
    </>
  )
}

export default Navbar