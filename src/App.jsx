import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import HostVans, {loader as HostVansLoader} from './Pages/Host/HostVans.jsx'
import VanDetailPage, {loader as VanDetailLoader} from './Pages/Vans/VanDetailPage.jsx'
import "../server.js"
import Layout from './components/Layout.jsx'
import Dashboard from './Pages/Host/Dashboard.jsx'
import Income from './Pages/Host/Income.jsx'
import Reviews from './Pages/Host/Reviews.jsx'
import HostLayout from './components/HostLayout.jsx'
import Vans, {loader as vansLoader} from './Pages/Vans/Vans.jsx'
import HostVanDetail, {loader as HostVanDetailLoader} from './Pages/Host/HostVanDetail.jsx'
import HostVanPhotos from './Pages/Host/HostVanPhotos.jsx'
import HostVanPricing from './Pages/Host/HostVanPricing.jsx'
import HostVansInfo from './Pages/Host/HostVansInfo.jsx'
import NotFound from './Pages/NotFound.jsx'
import Error from './components/Error.jsx'
import Login from './Pages/Login.jsx'
import { requireAuth } from '../Utils.js'


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route
      path="login"
      element={<Login />}
    />
  
    <Route path='vans' >
      <Route index element={<Vans/>} loader={vansLoader} errorElement={<Error/>}/> 
      <Route 
      path=':id' 
      element={<VanDetailPage/>}
      loader = {VanDetailLoader}
      />
    </Route>

    <Route path='host' element={<HostLayout/>} loader={ requireAuth} >
      <Route
      index 
      element={<Dashboard/>}
      loader={ requireAuth}
      />
      
      <Route
      path='income' 
      element={<Income/>}
      loader={ requireAuth}
      />
      
      <Route
      path='review' 
      element={<Reviews/>}
      loader={ requireAuth}
      />
      

      <Route 
      path='vans' 
      element={<HostVans/>}
      loader={HostVansLoader}
      />
      
      <Route 
      path='vans/:id' 
      element={<HostVanDetail/>}
      loader={HostVanDetailLoader}
      >
        
        <Route 
        index 
        element={<HostVansInfo/>}
        loader={ requireAuth}
        />
        
        <Route 
        path='pricing' 
        element={<HostVanPricing/>}
        loader={ requireAuth}
        />
        
        <Route 
        path='photos' 
        element={<HostVanPhotos/>}
        loader={ requireAuth}
        />
        
      </Route>
    </Route>

    <Route path='*' element={<NotFound/>}/>
  </Route>
  ))

  return (
    <RouterProvider router={router}/>

  )
}

export default App



