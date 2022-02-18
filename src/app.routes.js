import React from 'react';
// router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import HeaderNavbar from './components/navbar/navbar.component';
import Register from './screens/Register';
import Home from './screens/Home';
import Error404 from './screens/Error404';
import Login from './screens/Login';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from './screens/User';
import OrderDetail from './components/orders/OrderDetail';
import Cart from './components/cart/Cart';
import OrderForm from './components/orders/Order.form';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { saveCartLocalStorage } from './helpers/cartLocalStorage';
import PaymentForm from './components/orders/Payment.form';
import Dashboard from './components/admin/Dashboard';
import Productdetail from './screens/ProductDetail';

const AppRoutes = () => {
   const cart = useSelector(state => state.products.cart);

   useEffect(() => {
      saveCartLocalStorage(cart);
   }, [cart]);

   return (
      <div>
         <BrowserRouter>
            <ToastContainer />
            <HeaderNavbar />
            <div className="dashboard-Admin">
               <div className="content-Dashboard">
                  <Routes>
                     <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path='register' element={<Register />} />
                        <Route path='login' element={<Login />} />
                        <Route path='user' element={<User />} />
                        <Route path='cart' element={<Cart />} />
                        <Route path='order'>
                           <Route path='envio' element={<OrderForm />} />
                           <Route path=':id' element={<OrderDetail />} />
                        </Route>
                        <Route path='product'>
                           <Route path=':id' element={<Productdetail />} />
                        </Route>
                        <Route path='payment'>
                           <Route path=':orderId' element={<PaymentForm />} />
                        </Route>
                        <Route path='dashboard'>
                           <Route path='admin' element={<Dashboard />} />
                        </Route>
                        <Route path='*' element={<Error404 />} />
                     </Route>
                  </Routes>
               </div>
            </div>
         </BrowserRouter>
      </div>
   );
}

export default AppRoutes;
