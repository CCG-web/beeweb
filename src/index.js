import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App"
import Login from "./routes/Login"
const router = createBrowserRouter([
  {
path: "/",
element:<App/>,
  },{

  path: "login",
  element: <Login/>
},

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


