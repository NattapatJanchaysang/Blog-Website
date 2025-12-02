import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import React from 'react'
import { Home } from '@/pages/Home'
import { Register } from '@/pages/Register'
import { Login } from '@/pages/Login'
import { Write } from '@/pages/Write'
import { Single } from '@/pages/Single'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/write",
      element: <Write />
    },
    {
      path: "/single",
      element: <Single />
    }
])

const App = () => {
  return (
    <div>App</div>
  )
}

export default App