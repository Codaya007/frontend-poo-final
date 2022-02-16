import {
   GET_ORDERS_BY_USER, LOAD_ORDER_DETAIL
} from "../actions/types";
// import { toast } from "react-toastify";

// Intial State
const intialState = {
   miOrders: [],
   loadingOrders: false,
};

// Reducers REDUX
export default function reducer(state = intialState, action) {
   const {
      type,
      payload
   } = action;
   switch (type) {
      case GET_ORDERS_BY_USER:
         return { ...state, miOrders: payload };
      default:
         return { ...state };
   }
}

