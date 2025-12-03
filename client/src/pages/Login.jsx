import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'
import axios from 'axios'

export const Login = () => {
  
  const { login } = useContext(AuthContext);
  const Navigate = useNavigate()

  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })


  const [err, setError] = useState(null)
  

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await login(inputs)
      Navigate("/" )
      console.log(res)
    } catch (err) {
      setError(err.response?.data || err.message)
      console.log(err)
    }
  } 


  return (
<div className='flex justify-center items-center h-screen bg-yellow-100 flex-col'>
    <h1 className='font-bold text-2xl text-center mb-8 text-glow text-yellow-600'>User Login</h1>
    <form className='container flex flex-col max-w-xl bg-gray-50 rounded-3xl p-8'> 
        <input className='border-b-1 p-4 m-4' type="text" placeholder='username' name="username" onChange={handleChange}/>
        <input className='border-b-1 p-4 m-4' type="password" placeholder='password' name="password" onChange={handleChange}/>
        <button className='main-button mx-auto my-4 text-center cursor-pointer' onClick={handleSubmit}>Login</button>
        {err && <p className='text-red-600 text-center'>{err}</p>}
        <span className='text-center'>Don't you have an account? <Link to='/register' className='text-blue-500'>Register</Link></span>
    </form>
</div>
  )
}
