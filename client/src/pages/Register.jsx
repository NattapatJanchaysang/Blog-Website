import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("/api/auth/register", inputs)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  } 


  return (
<div className='flex justify-center items-center h-screen bg-yellow-100 flex-col'>
    <h1 className='font-bold text-2xl text-center mb-8 text-glow text-yellow-600'>Register an Account</h1>
    <form className='container flex flex-col max-w-xl bg-gray-50 rounded-3xl p-8'>
        <input className='border-b-1 p-4 m-4' type="text" placeholder='username' name="username" onChange={handleChange}/>
        <input className='border-b-1 p-4 m-4' type="email" placeholder='email' name="email" onChange={handleChange}/> 
        <input className='border-b-1 p-4 m-4' type="password" placeholder='password' name="password" onChange={handleChange}/>
        <button className='main-button mx-auto my-4 text-center cursor-pointer' onClick={handleSubmit}>Register</button>
        <span className='text-center'>Do you have an account? <Link to='/login' className='text-blue-500'>Login</Link></span>
    </form>
</div>
  )
}
