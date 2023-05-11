import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from "./components/Team"
const router = createBrowserRouter([
  {
path: "/",
Element:<Navbar/>,
},

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


