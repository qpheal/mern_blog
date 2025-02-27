import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import PostDetail from './pages/Home'
import Register from './pages/Register'
import {LoginPage} from './pages/LoginPage'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors' 
import CreatePost from './pages/CreatePost'
import CategoryPosts from './pages/CategoryPost'
import AuthorPost from './pages/AuthorPost';
import Dashboard from './pages/Dashboard'
import EditPost from './pages/EditPost'
import LogOut from './pages/LogOut'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'posts/:id', element: <PostDetail/>},
      {path: 'register', element: <Register/>},
      {path: 'login', element: <LoginPage/>},
      {path: 'profile/:id', element: <UserProfile/>},
      {path: 'authors', element: <Authors />},
      {path: 'create', element: <CreatePost />},
      {path: 'posts/categories/:category', element: <CategoryPosts/>},
      {path: 'posts/users/:id', element: <AuthorPost/>},
      {path: 'myposts/:id', element: <Dashboard/>},
      {path: 'posts/:id/edit', element: <EditPost/>},
      {path: 'logout', element: <LogOut/>}
    ]
  }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router = {router} /> 
  </React.StrictMode>
);
