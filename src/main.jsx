import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Book from './components/books/Book.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/book",
    element: <Book />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
