import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Produtos from './routes/Produtos';
import Error from './routes/Error';
import EditarProdutos from './routes/EditarProduto/index.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/produtos",
        element: <Produtos/>,
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProdutos/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
