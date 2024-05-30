import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Signin  from './Signin.jsx';
import Signup from './Signup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin></Signin>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);