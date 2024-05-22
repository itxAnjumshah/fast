import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Course from './pages/course';
import Blog from './pages/blog';
import Blogsdetails from './pages/blogDetails';
import Error404 from './pages/error404';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allroutes= createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about-us',
      element:<About/>
    },
    {
      path: 'contact',
      element: <Contact/>
    },
  
  {
    path: 'course',
    element:<Course/>
  },
  {
   path: 'blog',
   element:<Blog/>
  },
  {
    path:"blocks/:id",
    element:<Blogsdetails/>,
  },
  {
    path:'*',
    element:<Error404/>
  },

  ]
)


root.render(
  <React.StrictMode>
<RouterProvider router={allroutes}/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
