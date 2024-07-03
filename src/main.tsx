
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing required components and modules from react-router-dom for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing the main stylesheet
import './index.css';

// Importing the page components for different routes
import ErrorPage from './pages/NotFound-page.tsx'; // 404 Error page component
import ShopPage from './pages/Shop.tsx';
import Contact from './pages/Contact.tsx'; 
import Home from './Home.tsx';
import About from './pages/About.tsx'; // About page component

// Creating the router configuration with routes and corresponding components
const router = createBrowserRouter([
  {
    path: "/", // Root path, renders the Home component
    element: <Home />,
    errorElement: <ErrorPage /> // Error component for handling 404 errors
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
    path: "/contact", // Path for the Contact page
    element: <Contact />
  }
]);

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Enabling strict mode to help with identifying potential problems in an application
  <React.StrictMode>
    {/* Providing the router configuration to the application */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
