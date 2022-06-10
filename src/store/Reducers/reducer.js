import { ADD_TO_CART, DEC_COUNTER, DEL_FROM_CART, FETCH_DATA, INC_COUNTER, OPEN_OVERLAY_CART, SELECT_ATTRIBUTE, SELECT_CATEGORY, SELECT_CURRENCY, SELECT_IMG, SET_TOTAL_COUNT, SET_TOTAL_SUM } from "../Actions/actions"

const initialState = {
  categories: null,
  selectedCategory: {},
  currencies: [],
  selectedCurrency: 'USD',
  selectedImgUrl: '',
  selectedAttributes: [],
  productsInCart: [],
  overlay: false,
  totalQuantity: 0,
  totalSum: 0
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
      const isInCart = state.productsInCart.filter(el => el.name === action.payload.name)
      if (isInCart.length === 1 ) return state;
      action.payload.counter = 1;
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
        totalQuantity: state.totalQuantity + 1
      }
    }
    case DEL_FROM_CART: {
      return {
        ...state,
        productsInCart: state.productsInCart.filter( el => el.name !== action.payload.name)
      }
    }
    case OPEN_OVERLAY_CART: {
      return {
        ...state,
        overlay: !state.overlay
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
    case SET_TOTAL_SUM: {
      return {
        ...state,
        totalSum: action.payload
      }
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalQuantity: action.payload
      }
    }
    default:
      return state
  }
}