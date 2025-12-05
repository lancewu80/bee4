import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import Property from './pages/Property';
import Contact from './pages/Contact';
import About from './pages/About';
import Details from './pages/Details';

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />} />
        <Route path='/property' element={<Property />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/details' element={<Details />} />
      </Route>
    </Route>
  ))

  return (
    <RouterProvider router={myRoute} />
  )
}

export default App