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
import TouristsSportDetails from './Compunents/TouristsSportDetails/TouristsSportDetails.jsx';
import Private from './Compunents/Private/Private.jsx';
import AddTouristsSport from './Compunents/AddTouristsSport/AddTouristsSport.jsx';
import UpdateTouristsSport from './Compunents/AddTouristsSport/UpdateTouristsSport.jsx';
import MyList from './Compunents/MyList/MyList.jsx';
import Contact from './Compunents/Contact/Contact.jsx';
// import { fetchSports } from './Compunents/Roots/loader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allTourists',
        element: <AllTouristsSport></AllTouristsSport>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/sportDetails/:id',
        loader: async () => {
          const response = await fetch('/place.json'); // Ensure this path is correct
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        },
        element: <Private><TouristsSportDetails></TouristsSportDetails></Private>
      },
      {
        path: '/addTourists',
        element: <AddTouristsSport></AddTouristsSport>
      },
      {
        path: '/updateTourists/:id',
        element: <UpdateTouristsSport></UpdateTouristsSport>,
        loader: ({ params }) => fetch(`https://asia-explor-server-q4t6ep2pc-farhans-projects-4f0ac41d.vercel.app/tourists/${params.id}`)
      },
      {
        path: '/list',
        element: <Private><MyList></MyList></Private>,
        loader: () => fetch('https://asia-explor-server-q4t6ep2pc-farhans-projects-4f0ac41d.vercel.app/tourists')
      },
      {
        path:'/contact',
        element:<Contact></Contact>
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
