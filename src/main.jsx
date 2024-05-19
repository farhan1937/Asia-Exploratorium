import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Compunents/ErrorPage/ErrorPage.jsx';
import Roots from './Compunents/Roots/Roots.jsx';
import AuthProvider from './Compunents/AuthProvider/AuthProvider.jsx';
import Home from './Compunents/Home/Home.jsx';
import LogIn from './Compunents/LogIn/LogIn.jsx';
import Register from './Compunents/Register/Register.jsx';
import AllTouristsSport from './Compunents/AllTouristsSport/AllTouristsSport.jsx';
import About from './Compunents/About us/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/allTourists',
        element:<AllTouristsSport></AllTouristsSport>,
        // loader: ()=> fetch("/public/place.json")
      },
      {
        path:'/about',
        element:<About></About>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
