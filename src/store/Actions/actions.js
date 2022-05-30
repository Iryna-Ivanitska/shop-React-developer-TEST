export const FETCH_DATA = 'FETCH_DATA';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

const DATA_QUERY = `
{
  categories {
  name
  products {
    id
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    brand
  }
}
}
`

export const fetchProducts = () => {
  return async dispatch => {
    const resp = await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify( { query: DATA_QUERY } )
    })
    
    const response = await resp.json()
    dispatch(fetchData(response.data.categories))
  } 
}

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