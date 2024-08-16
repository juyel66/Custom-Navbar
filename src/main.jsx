import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Rout from './Components/Rout'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout></Rout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
