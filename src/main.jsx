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
import Pricingpage from './pages/Pricingpage';
import Footer from './components/Footer';
import ComingSoonpage from './pages/ComingSoonpage';



const Root = () => {
  return (
      <>
      <div className='rootContainer'>
        <Navbar />
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
      <Route index element={<Homepage />} />
      <Route path='/pricing' element={<Pricingpage />} />
      <Route path='/comingsoon' element={<ComingSoonpage />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
