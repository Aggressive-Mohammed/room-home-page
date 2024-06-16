import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/Home.tsx'
import Page2 from './pages/About.tsx'
import Page3 from './pages/Shop.tsx'
import ErrorPage from './pages/NotFound-page.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/page1",
    element: <HomePage />
  },
  {
    path: "/page2",
    element: <Page2 />
  },
  {
    path: "/page3",
    element: <Page3 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/*  */}
  </React.StrictMode>,
)
