import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Page1 from './pages/Desktop-page1.tsx'
import Page2 from './pages/Desktop-page2.tsx'
import Page3 from './pages/Desktop-page3.tsx'
import ErrorPage from './pages/NotFound-page.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/page1",
    element: <Page1 />
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
