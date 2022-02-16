// ACCIONES REDUX
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL_REGISTER, URL_LOGIN, USER_GET_INFO, URL_GET_ALL_PRODUCTS, URL_GET_ORDERS_BY_USER } from '../../assets/constants';
import getHeaderToken from '../../helpers/getHeaderToken';
import { AUTH_ERROR, GET_ALL_PRODUCTS, GET_ORDERS_BY_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, SET_LOADING_AUTH, SET_LOADING_ORDERS, SET_LOADING_PRODUCTS, USER_LOADED } from './types';

// OBTENER INFORMACIÓN DEL USUARIO
export const loadUser = () => async (dispatch) => {
   // Set config
   const config = getHeaderToken();
   try {
      const res = await axios.get(USER_GET_INFO, config);
      dispatch({
         type: USER_LOADED,
         payload: res.data
      })
   } catch (error) {
      console.log(error.response)
      dispatch({
         type: AUTH_ERROR
      })
   }
}

// REGISTRAR UN NUEVO USUARIO
export const register = ({
   name,
   lastname,
   email,
   password,
   address
}) => async (dispatch) => {
   // Set body
   const body = {
      name,
      lastname,
      email,
      password,
      address
   };

   dispatch({
      type: SET_LOADING_AUTH
   })
   console.log("Body");
   console.log(body);
   try {
      // Response 
      const res = await axios.post(URL_REGISTER, body);

      console.log(res.data);
      dispatch({
         type: REGISTER_SUCCESS,
         payload: res.data.token
      })
      dispatch(loadUser())
      dispatch(getAllOrdersByUser())
   } catch (err) {
      const errors = err.response.data.errors
      console.log(errors);
      if (errors) {
         errors.map(error => toast.error(error.msg))
      }

      dispatch({
         type: REGISTER_FAIL
      })
   }
};

// LOGUEAR USUARIO
export const login = (body) => async (dispatch) => {
   dispatch({
      type: SET_LOADING_AUTH
   })
   try {
      // Response 
      const res = await axios.post(URL_LOGIN, body);
      // console.log(res.data.token);

      dispatch({
         type: LOGIN_SUCCESS,
         payload: res.data.token
      })
      dispatch(loadUser())
      dispatch(getAllOrdersByUser())
   } catch (err) {
      const errors = err.response.data.errors
      if (errors) {
         const errors = err.response.data.errors
         console.log(errors);
         errors.forEach(error => toast.error(error.msg))
      }

      dispatch({
         type: LOGIN_FAIL
      })
   }
};


// CERRAR SESIÓN USUARIO
export const logout = () => {
   return {
      type: LOGOUT
   };
}

export const setLoadingAuth = (loading = true) => {
   return { type: SET_LOADING_AUTH, payload: loading }
}

// OBTENER TODOS LOS PRODUCTOS
export const getAllProducts = () => async (dispatch) => {
   // Seteo en true el loading
   dispatch({
      type: SET_LOADING_PRODUCTS,
      payload: true
   })
   // Realizo la petición a la API
   try {
      const res = await axios.get(URL_GET_ALL_PRODUCTS);
      console.log(res.data);

      dispatch({
         type: GET_ALL_PRODUCTS,
         payload: res.data
      });
   } catch (err) {
      toast.error("No se han podido cargar los productos");
      console.log(err);
      dispatch({
         type: SET_LOADING_PRODUCTS,
         payload: false
      })
   }
}

// 
export const setLoadingOrders = (loading = true) => {
   return { type: SET_LOADING_ORDERS, payload: loading }
}

// OBTENER TODAS LAS ÓRDENES DE UN USUARIO
export const getAllOrdersByUser = () => async (dispatch) => {
   // Seteo en true el loading
   dispatch(setLoadingOrders());
   // Realizo la petición a la API
   try {
      const res = await axios.get(URL_GET_ORDERS_BY_USER, getHeaderToken());
      console.log(res.data);

      dispatch({
         type: GET_ORDERS_BY_USER,
         payload: res.data
      });
   } catch (err) {
      toast.error("No se han podido cargar los pedidos");
      console.log(err.response);
      dispatch({
         type: SET_LOADING_PRODUCTS,
         payload: false
      })
   }
}
