import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, SET_LOADING, USER_LOADED } from "../actions/types";
import { toast } from "react-toastify";

// Intial State
const intialState = {
   token: localStorage.getItem('token_poo'),
   isAuthenticated: null,
   loading: true,
   user: null,
};

// Reducers REDUX
export default function reducer(state = intialState, action) {
   const {
      type,
      payload
   } = action;
   switch (type) {

      case USER_LOADED:
         const { name } = payload;

         toast(`Welcome ${name}`);
         return {
            ...state,
            user: payload,
            isAuthenticated: true,
            loading: false
         }
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
         // Set Token in localstorage
         localStorage.setItem('token_poo', payload);
         return {
            ...state,
            ...payload,
            isAuthenticated: true,
            loading: false,
         };
      case SET_LOADING:
         return {
            ...state,
            loading: true
         }
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
      case LOGOUT:
         // Remove Token in localstorage
         localStorage.removeItem('token_poo');
         return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null
         };
      default:
         return { ...state };
   }
}

