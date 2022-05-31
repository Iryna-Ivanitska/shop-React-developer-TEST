import { fetchData } from "./Actions/actions"

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

// thunk
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