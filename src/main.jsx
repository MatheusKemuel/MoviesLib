import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './pages/Home.jsx'
import Filmes from './pages/Filmes.jsx'
import Series from './pages/Series.jsx'
import Favorites from './pages/Favorites.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movies",
        element: <Filmes />
      },
      {
        path: "/series",
        element: <Series />
      },
      {
        path: "favorites",
        element: <Favorites />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
