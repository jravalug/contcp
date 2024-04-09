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
        path: '/cliente',
        element: <Link to={`/`}>Cliente</Link>
      },
      {
        path: '/ingresos',
        element: <Link to={`/`}>Ingresos 📨</Link>
      },
      {
        path: '/gastos',
        element: <Link to={`/`}>Gastos 🧢</Link>
      },
      {
        path: '/nomina',
        element: <Link to={`/`}>Nómina 🫂</Link>
      },
      {
        path: '/tributos',
        element: <Link to={`/`}>Tributos ♉</Link>
      },
      {
        path: '/prorrateo',
        element: <Link to={`/`}>Prorrateo</Link>
      },
      {
        path: '/reportes',
        element: <Link to={`/`}>Reportes</Link>
      },
      {
        path: '/configuracion',
        element: <Link to={`/`}>Configuración 💠</Link>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
