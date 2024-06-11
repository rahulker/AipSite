// import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./component/Main/ContactUs";
import "./assets/css/style-scss.css";
import "./assets/css/style.css";
import Home from "./component/Main/Home";
import Product from "./component/Main/Product";
const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/product", element: <Product /> },
    { path: "/contact-us", element: <ContactUs /> },
  ]);
  return (
    <div className="container-div">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
