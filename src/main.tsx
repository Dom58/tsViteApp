import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Buckets from "./pages/Buckets";
import NotFoundPage from "./pages/NotFoundPage";
import Users from "./pages/Users";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/buckets", element: <Buckets /> },
  { path: "/users", element: <Users /> },
  { path: "**", Component: NotFoundPage },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
