import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';



const Root = () => {
  return (
      <>
      <div className='rootContainer'>
        <Navbar />
        <Outlet />
      </div>
          
      </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path='/'
    element={<Root />}
    >
      <Route index element={<Homepage />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
