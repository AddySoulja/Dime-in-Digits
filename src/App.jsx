import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/pages/About";
import Create from "./components/pages/Create";
import Dashboard from "./components/pages/Dashboard";
import Explore from "./components/pages/Explore";
import Wallet from "./components/pages/Wallet";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/wallet",
      element: <Wallet />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
  ]);
  return (
    <body id="top">
      <RouterProvider router={router} />
    </body>
  );
}

export default App;
