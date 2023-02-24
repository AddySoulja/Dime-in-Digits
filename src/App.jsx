import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Explore from "./components/pages/Explore";
import Wallet from "./components/pages/Wallet";
import "./App.css";
import DisplayItem from "./components/product/DisplayItem";
import Sellers from "./components/pages/Sellers";
import Create from "./components/pages/Create";
import Profile from "./components/pages/Profile";

function App() {
  const [wallet, setWallet] = useState([]);

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
      element: <Wallet wallet={wallet} setWallet={setWallet} />,
    },
    {
      path: "/sellers",
      element: <Sellers />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/explore/:id",
      element: <DisplayItem wallet={wallet} setWallet={setWallet} />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    <body id="top">
      <RouterProvider router={router} />
    </body>
  );
}

export default App;
