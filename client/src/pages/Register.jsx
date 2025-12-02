import React from 'react'

export const Register = () => {
  return (
<div className='flex justify-center items-center h-screen bg-yellow-100 flex-col'>
    <h1 className='font-bold text-2xl text-center mb-8 text-glow text-yellow-600'>User Login</h1>
    <form className='container flex flex-col max-w-xl bg-gray-50 rounded-3xl p-8'> 
        <input className='border-b-1 p-4 m-4' type="text" placeholder='username' />
        <input className='border-b-1 p-4 m-4' type="password" placeholder='password' />
        <button className='main-button mx-auto my-4 text-center cursor-pointer'>Login</button>
        <span className='text-center'>Don't you have an account?</span>
    </form>
</div>
  )
}
