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
import Authors from './components/authors/Authors.jsx'
import AuthorBlogs from './components/authors/AuthorBlogs.jsx'

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
  },
  {
    path: "/authors",
    element: <Authors />
  },
  {
    path: "/authorblogs",
    element: <AuthorBlogs />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
