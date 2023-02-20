import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Explore from "./components/pages/Explore";
import Wallet from "./components/pages/Wallet";
import "./App.css";
import DisplayItem from "./components/product/DisplayItem";
import Sellers from "./components/pages/Sellers";
import Create from "./components/pages/Create";

function App() {
  const [item, setItem] = useState({});
  const [itemsInWallet, setItemsInWallet] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/explore",
      element: <Explore setItem={setItem} />,
    },
    {
      path: "/wallet",
      element: <Wallet itemsInWallet={itemsInWallet} />,
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
      element: <DisplayItem item={item} setItemsInWallet={setItemsInWallet} />,
    },
  ]);
  return (
    <body id="top">
      <RouterProvider router={router} />
    </body>
  );
}

export default App;
