import * as TYPES from '@app/redux/actions/types';
import {ProductDtType} from '@app/generated/graphql-types';

type StateType = {
  products: ProductDtType[];
};

const initialState: StateType = {
  products: [],
};

function cartReducer(
  state = initialState,
  action: {type: string; payload: any},
) {
  switch (action.type) {
    case TYPES.GET_CART_LIST:
      return {
        products: action.payload,
      };
    case TYPES.ADD_PRODUCT_TO_CART:
      return {
        products: [...state.products, action.payload],
      };
    case TYPES.REMOVE_PRODUCT_FROM_CART:
      return {
        products: state.products.filter(
          product => product.productID !== action.payload,
        ),
      };
    default:
      return state;
  }
}

export default cartReducer;
