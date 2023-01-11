import { Cart } from "../../context/ProductContext";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  CHANGE_CART_QUANTITY = "CHANGE_CART_QUANTITY",
  RESET_CART = "RESET_CART",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  GET_STORED_LIST = "GET_STORED_LIST",
}

export function addProductToCart(product: Cart) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product, quantity: 0 },
  };
}
export function removeProductFromCart(product: Cart) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      product,
      quantity: 0,
    },
  };
}
export function resetProductsFromCart() {
  return {
    type: ActionTypes.RESET_CART,
    payload: {
      product: productPattern,
      quantity: 0,
    },
  };
}
export function changeCartQuantityFromCart(product: Cart, quantity: number) {
  return {
    type: ActionTypes.CHANGE_CART_QUANTITY,
    payload: { product, quantity },
  };
}
export function getStoredLocalList() {
  return {
    type: ActionTypes.GET_STORED_LIST,
    payload: {
      product: productPattern,
      quantity: 0,
    },
  };
}

const productPattern = {
  description: "",
  id: 0,
  image: "",
  name: "",
  price: 0,
  quantity: 0,
  types: [],
};

// export function interruptCurrentCycleAction() {
//   return {
//     type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
//   };
// }
// export function markCurrentCycleAsFinishedAction() {
//   return {
//     type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
//   };
// }
