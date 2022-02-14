// ACCIONES REDUX
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL_REGISTER, URL_LOGIN, USER_GET_INFO } from '../../assets/constants';
import setAuthToken from '../../helpers/setAuthToken';
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, SET_LOADING, USER_LOADED } from './types';

// OBTENER INFORMACIÓN DEL USUARIO
export const loadUser = () => async (dispatch) => {
   if (localStorage.token_ecommerce) {
      setAuthToken(localStorage.token_ecommerce)
   }

   try {
      const res = await axios.get(USER_GET_INFO);
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
   // Config header for axios
   const config = {
      headers: {
         'Content-Type': 'application/json',
      },
   };

   // Set body
   const body = JSON.stringify({
      name,
      lastname,
      email,
      password,
      address
   });

   dispatch({
      type: SET_LOADING
   })
   try {
      // Response 
      const res = await axios.post(URL_REGISTER, body, config)

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
export const login = ({
   email,
   password
}) => async (dispatch) => {
   // Config header for axios
   const config = {
      headers: {
         'Content-Type': 'application/json',
      },
   };

   // Set body
   const body = JSON.stringify({
      email,
      password
   });

   dispatch({
      type: SET_LOADING
   })
   try {
      // Response 
      const res = await axios.post(URL_LOGIN, body, config)

      dispatch({
         type: LOGIN_SUCCESS,
         payload: res.data
      })
      dispatch(loadUser())
   } catch (err) {
      const errors = err.response.data.errors
      if (errors) {
         // errors.forEach(error => toast(error.msg))
         console.log(errors);
      }

      dispatch({
         type: LOGIN_FAIL
      })
   }
};


// CERRAR SESIÓN USUARIO
export const logout = () => dispatch => {
   dispatch({
      type: LOGOUT
   })
}