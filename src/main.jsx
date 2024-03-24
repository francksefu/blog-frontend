import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import Book from './components/books/Book.jsx'
import LoginRegister from './components/loginregister/LoginRegister.jsx'
import Blog from './components/blogs/Blog.jsx'
import { store } from './components/redux/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/book",
    element: <Book />
  },
  {
    path: "/loginregister",
    element: <LoginRegister />
  },
  {
    path: "/blog",
    element: <Blog />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
