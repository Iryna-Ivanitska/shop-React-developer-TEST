export const FETCH_DATA = 'FETCH_DATA';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_CURRENCY = 'SELECT_CURRENCY';
export const SELECT_IMG = 'SELECT_IMG';
export const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';

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