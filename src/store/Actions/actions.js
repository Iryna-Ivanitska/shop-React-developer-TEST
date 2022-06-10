export const FETCH_DATA = 'FETCH_DATA';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_CURRENCY = 'SELECT_CURRENCY';
export const SELECT_IMG = 'SELECT_IMG';
export const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const DEL_FROM_CART = 'DEL_FROM_CART';
export const OPEN_OVERLAY_CART = 'OPEN_OVERLAY_CART';
export const SET_TOTAL_SUM = 'SET_TOTAL_SUM';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data
  }
};

export const selectCategory = (name) => {
  return {
    type: SELECT_CATEGORY,
    payload: name
  }
};

export const selectCurrency = (currency) => {
  return {
    type: SELECT_CURRENCY,
    payload: currency
  }
};
export const selectImg = (img) => {
  return {
    type: SELECT_IMG,
    payload: img
  }
};
export const selectAttribute = (attributes) => {
  return {
    type: SELECT_ATTRIBUTE,
    payload: attributes
  }
};
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
};
export const increment = (product) => {
  return {
    type: INC_COUNTER,
    payload: product
   }
};
export const decrement = (product) => {
  return {
    type: DEC_COUNTER,
    payload: product
   }
};
export const deleteFromCart = (product) => {
  return {
    type: DEL_FROM_CART,
    payload: product
   }
};
export const openOverlayCart = () => {
  return {
    type: OPEN_OVERLAY_CART,
   }
};
export const setTotalSum = (sum) => {
  return {
    type: SET_TOTAL_SUM,
    payload: sum
   }
};
export const setTotalCount = (total) => {
  return {
    type: SET_TOTAL_COUNT,
    payload: total
   }
};