// ACCIONES REDUX
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL_REGISTER, URL_LOGIN, USER_GET_INFO } from '../../assets/constants';
import getHeaderToken from '../../helpers/getHeaderToken';
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, SET_LOADING_AUTH, USER_LOADED } from './types';

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
   const body = JSON.stringify({
      name,
      lastname,
      email,
      password,
      address
   });

   dispatch({
      type: SET_LOADING_AUTH
   })
   try {
      // Response 
      const res = await axios.post(URL_REGISTER, body);

      console.log(res.data);
      dispatch({
         type: REGISTER_SUCCESS,
         payload: res.data
      })
      dispatch(loadUser())
   } catch (err) {
      const errors = err.response.data.errors
      console.log(errors);
      if (errors) {
         errors.forEach(error => toast.error(error.msg))
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

// OBTENER TODOS LOS PRODUCTOS
export const getAllProducts = () => async (dispatch) => {

}