import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form from './Components/Form/Form';
import List from './Components/List/List';
import './index.css'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
  {
    path:"/listaClientes",
    element:<List/>
  }
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

