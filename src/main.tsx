import React from 'react'
import ReactDOM from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './pages/NotFound-page.tsx'
import ShopPage from './pages/Shop.tsx'
import Contact from './pages/Contact.tsx'
import Home from './Home.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/shop",
    element: <ShopPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
