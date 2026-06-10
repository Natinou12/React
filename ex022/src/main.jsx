import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/Home.jsx'
import Contatos from './routes/Contatos.jsx'
import E404 from './routes/E404.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "contatos",
//     element: <Contatos />
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <E404 />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contatos",
        element: <Contatos />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
