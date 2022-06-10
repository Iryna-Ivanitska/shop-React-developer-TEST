import { ADD_TO_CART, DEC_COUNTER, DEL_FROM_CART, FETCH_DATA, INC_COUNTER, SELECT_ATTRIBUTE, SELECT_CATEGORY, SELECT_CURRENCY, SELECT_IMG } from "../Actions/actions"

const initialState = {
  categories: null,
  selectedCategory: {},
  currencies: [],
  selectedCurrency: 'USD',
  selectedImgUrl: '',
  selectedAttributes: [],
  productsInCart: []
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      const currencies = action.payload[0].products[0].prices.map( el => el.currency);
      return {
        ...state,
        categories: action.payload,
        selectedCategory: action.payload[0],
        currencies: currencies
      }
    }
    case SELECT_CATEGORY: {
      return {
        ...state,
        selectedCategory: state.categories.filter( cat => cat.name === action.payload)[0]
      }
    }
    case SELECT_CURRENCY: {
      return {
        ...state,
        selectedCurrency: action.payload
      }
    }
    case SELECT_IMG: {
      return {
        ...state,
        selectedImgUrl: action.payload
      }
    }
    case SELECT_ATTRIBUTE: {
      return {
        ...state,
        selectedAttributes: action.payload
      }
    }
    case ADD_TO_CART: {
      action.payload.counter = 1;
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload]
      }
    }
    case DEL_FROM_CART: {
      console.log(action.payload)
      return {
        ...state,
        productsInCart: state.productsInCart.filter( el => el.name !== action.payload.name)
      }
    }
    case INC_COUNTER: {
      const products = state.productsInCart.map( el => el.name === action.payload.name 
        ? {
          ...el,
          counter: el.counter + 1
          } 
        : el)
      return {
        ...state,
        productsInCart: products
      }
    }
    case DEC_COUNTER: {
      const products = state.productsInCart.map( el => el.name === action.payload.name 
        ? {
          ...el,
          counter: el.counter - 1
          } 
        : el)
      return {
        ...state,
        productsInCart: products
      }
    }
    default:
      return state
  }
}