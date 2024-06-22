import React from "react";
import { Link } from "react-router-dom";

// ShopPage component renders the shop page with a link back to the home page
const ShopPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-4xl font-extrabold">
      {/* Page title */}
      <h1>Shop Page</h1>
      {/* Link to navigate back to the home page */}
      <Link to={'/'} className="underline decoration-sky-500" aria-label="Go to Home Page">Back to Home page</Link>
    </div>
  );
}

export default ShopPage;
