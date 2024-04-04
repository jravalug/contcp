import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/gastos',
        element: <Link to={`/`}>Gastos</Link>
      },
      {
        path: '/ingresos',
        element: <Link to={`/`}>Ingresos</Link>
      },
      {
        path: '/tributos',
        element: <Link to={`/`}>Tributos</Link>
      },
      {
        path: '/reportes',
        element: <Link to={`/`}>Reportes</Link>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
