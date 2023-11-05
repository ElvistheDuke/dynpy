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



const Root = () => {
  return (
      <>
      <div className='rootContainer'>
        <NavBar />
        <Outlet />
        <Footer />
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

    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
