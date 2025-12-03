import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between px-12 py-2 bg-yellow-100 font-serif relative'>
        <Link to='/' className='w-19 h-auto item-center'><img src="./public/Logo2.png" alt="Logo" /></Link>
        <div className='hidden md:flex gap-x-7 text-lg items-center'>
            <Link to='/?cat=art'>ART</Link>
            <Link to='/?cat=science'>SCIENCE</Link>
            <Link to='/?cat=technology'>TECHNOLOGY</Link>
            <Link to='/?cat=cinema'>CINEMA</Link>
            <Link to='/?cat=design'>DESIGN</Link>
            <Link to='/?cat=food'>FOOD</Link>
            <span>Username</span>
            <span className='cursor-pointer'>Logout</span>
            <Link to='/write' className='rounded-full font-medium text-yellow-800 bg-yellow-300
         transition-all duration-300 hover:shadow-[0_0_10px_rgba(194,141,47,0.5)]
         hover:scale-120 active:scale-95'>Write</Link>
        </div>
    </nav>
  )
}

export default NavBar
