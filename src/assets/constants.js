export const BASEURL = "http://localhost:5000/api";

// USER
export const USER_GET_INFO = `${BASEURL}/user`;
export const URL_LOGIN = `${BASEURL}/user/login`;
export const URL_REGISTER = `${BASEURL}/user/register`;


// PRODUCT
export const URL_GET_ALL_PRODUCTS = `${BASEURL}/product/all`;
export const URL_SEARCH_BY_NAME = `${BASEURL}/product/search`;
// Se puede filtrar por categoría y precio
export const URL_FILTER_PRODUCTS = `${BASEURL}/product/filter`;

// CATEGORY
export const URL_GET_ALL_CATEGORIES = `${BASEURL}/category/all`;

// ORDERS
export const URL_GET_ORDERS_BY_USER = `${BASEURL}/order/user`; //require a token