import React from "react"

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-5">
        <div className="container flex justify-between items-center">
            <h1 className="text-3xl text-red-500 flex justify-center items-center gap-2">My Website</h1>
            <ul className="flex flex-row items-center gap-5 lg:gap-8 text-lg font-semibold">
                <li><a className="rounded-[20px] bg-white p-5 text-black inline-block px-3 py-2  hover:text-yellow-400 transition-colors duration-100" href="/">Home</a></li>
                <li><a className="rounded-[20px] bg-white p-5 text-black inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/contact">Contact</a></li>
                <li><a className="rounded-[20px] bg-white p-5 text-black inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-100" href="/about">About</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar