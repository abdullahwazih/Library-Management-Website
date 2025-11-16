import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import BooksProvider from './context-provider/Books_Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BooksProvider>
      <RouterProvider router={router}></RouterProvider>

    </BooksProvider>
  </StrictMode>,
)
