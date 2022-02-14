import React from 'react';
// router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import Navbar from './components/navbar/navbar.component';
import Register from './screens/Register';
import Home from './screens/Home';
import Error404 from './screens/Error404';
import Login from './screens/Login';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppRoutes = () => {
   return (
      <div>
         <BrowserRouter>
            <ToastContainer />
            <Navbar />
            <Routes>
               <Route path='/'>
                  <Route index element={<Home />} />
                  <Route path='register' element={<Register />} />
                  <Route path='login' element={<Login />} />
                  <Route path='*' element={<Error404 />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default AppRoutes;
