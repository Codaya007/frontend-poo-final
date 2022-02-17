import {
   GET_ORDERS_BY_USER, SET_ORDER,
} from "../actions/types";
// import { toast } from "react-toastify";

// Intial State
const intialState = {
   miOrders: [],
   loadingOrders: false,
   currentOrder: {
      country: "",
      city: "",
      address: "",
      reference: "",
      products: [
         //{ "productId": "620add8140ca49bf1801a878", "quantity": 2 }
      ]
   }
};

// Reducers REDUX
export default function reducer(state = intialState, action) {
   const {
      type,
      payload
   } = action;

   switch (type) {
      case SET_ORDER:
         return { ...state, currentOrder: { ...state.currentOrder, ...payload } };
      case GET_ORDERS_BY_USER:
         return { ...state, miOrders: payload };
      default:
         return { ...state };
   }
}

