import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Register } from '@/pages/Register'
import { Login } from '@/pages/Login'
import { Write } from '@/pages/Write'
import { Single } from '@/pages/Single'
import  NavBar from '@/components/NavBar'
import  Footer from '@/components/Footer.jsx'



const Layouts = () => {
  return (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
)
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children:[
        {
      path: "/",
      element: <Home />,
        },
        {
      path: "/post/:id",
      element: <Single />,
        },
        {
     path: "/write",
      element: <Write />,
        }
      ]
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App