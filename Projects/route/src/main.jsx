import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import FAQs from "./components/FAQs.jsx";
import Pricing from "./components/Pricing.jsx";
import Features from "./components/Features.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: < About/>,
      },
      {
        path:"/faqs",
        element:<FAQs/>
      },
      {
        path:"/pricing",
        element:<Pricing/>
      },
      {
        path:"/features",
        element:<Features/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode>
     
    </React.StrictMode>
    ,
  </RouterProvider>
);
