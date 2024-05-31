import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import "./index.css";
import OurServices from "./components/OurServices/OurServices.jsx";
import Content from "./Pages/Content.jsx";
import About from "./Pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/a",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  <App>
    <RouterProvider router={router} />
  </App>
);
