import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext.jsx'
import { useContext } from 'react'

const NavBar = () => {



const { currentUser, logout } = useContext(AuthContext)

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
            <span className='font-bold font-mono text-3xl text-glow text-yellow-400 mb-1'>{currentUser?.username}</span>
            {currentUser ? (<span className="cursor-pointer main-button py-2 px-1 text-red-900 bg-red-200" onClick={logout}>Logout</span>) : (
            <Link className="cursor-pointer main-button py-2 px-1 text-green-900 bg-green-200" to="/login">
              Login
            </Link>
          )}
            <Link to='/write' className='rounded-full font-medium text-yellow-800 bg-yellow-300
         transition-all duration-300 hover:shadow-[0_0_10px_rgba(194,141,47,0.5)]
         hover:scale-120 active:scale-95 py-2 px-1'>Write</Link>
        </div>

        <div className='flex gap-x-4 md:hidden'>
            <span className='font-bold font-mono text-3xl text-glow text-yellow-400 pt-2 px-4'>{currentUser?.username}</span>
            {currentUser ? (<span className="cursor-pointer main-button py-4 px-1 text-red-900 bg-red-200" onClick={logout}>Logout</span>) : (
            <Link className="cursor-pointer main-button py-4 px-2 text-green-900 bg-green-200" to="/login">
              Login
            </Link>
          )}
            <Link to='/write' className='rounded-full font-medium text-yellow-800 bg-yellow-300
         transition-all duration-300 hover:shadow-[0_0_10px_rgba(194,141,47,0.5)]
         hover:scale-120 active:scale-95 py-4 px-2'>Write</Link>
        </div>
    </nav>
  )
}

export default NavBar
