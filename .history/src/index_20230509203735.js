import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import landpage from "./components/Team"
const router = createBrowserRouter([])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


