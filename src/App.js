import React from "react";
import "./App.css";
import {createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Admin_page from "./pages/admin/admin_page.jsx";
import Consumer_page from "./pages/consumer/consumer_page.jsx";

const router = createBrowserRouter([
  //Public Routes
  {
    path: "/admin",
    element: <Admin_page />
  },
  {
    path: "/consumer",
    element: <Consumer_page />
  },

  //Redirect when URL not found
  {
    path: "/*",
    element: <Navigate to="/admin" />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;
