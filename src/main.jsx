import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import './index.css'

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );

