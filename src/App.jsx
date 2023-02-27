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
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./redux/reducers/cartReducer";
import { popupReducer } from "./redux/reducers/popupReducer";

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
      path: "/sellers",
      element: <Sellers />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/explore/:id",
      element: <DisplayItem />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  const store = configureStore({
    reducer: combineReducers({
      cart: cartReducer,
      popup: popupReducer,
    }),
  });

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
