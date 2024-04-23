import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
// import Error from './pages/Error';
import AboutMe from './components/aboutMe';
import ContactMe from './components/contactMe'
import Resume from './components/resume';
import Portfolio from './components/portfolio';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/ContactMe',
        element: <ContactMe />,
      },
    ],
  },
]);

// Main root that renders App imported from App.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

