import React from "react";
import { Link } from "react-router-dom"
const ErrorPage: React.FC = () => {
  return(
    <div className="flex flex-col items-center justify-center h-screen text-4xl font-extrabold"	>
      <h1>404 Not Found</h1>
       {/* Link to navigate back to the home page */}
      <Link to={'/'} className="visited:text-purple-600 underline decoration-sky-500" aria-label="Go to Home Page">Back to Home page</Link>
    </div>
  )
}

export default ErrorPage;