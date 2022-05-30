export const FETCH_DATA = 'FETCH_DATA';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

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