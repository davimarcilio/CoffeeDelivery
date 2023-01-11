import { Cart, Product } from "../../context/ProductContext";
import { ActionTypes } from "./actions";
interface ProductsState {
  cart: Cart[];
}

interface PayloadProps {
  product: Cart;
  quantity: number;
}

interface ActionReducerTypes {
  type: ActionTypes;
  payload: PayloadProps;
}

export function productsReducer(
  state: ProductsState,
  { type, payload }: ActionReducerTypes
) {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      if (!!state.cart.find((product) => product.id === payload.product.id)) {
        const changedCart = state.cart.map((product) => {
          if (product.id === payload.product.id) {
            product.quantity = product.quantity + 1;
          }
          return product;
        });
        localStorage.setItem(
          "CoffeeDelivery:1.0/items",
          JSON.stringify(changedCart)
        );
        return {
          cart: changedCart,
        };
      } else {
        localStorage.setItem(
          "CoffeeDelivery:1.0/items",
          JSON.stringify([...state.cart, payload.product])
        );
        return {
          cart: [...state.cart, payload.product],
        };
      }
    case ActionTypes.CHANGE_CART_QUANTITY: {
      const changedCart = state.cart.map((product) => {
        if (product.id === payload.product.id) {
          product.quantity = payload.quantity;
        }
        return product;
      });
      localStorage.setItem(
        "CoffeeDelivery:1.0/items",
        JSON.stringify(changedCart)
      );
      return {
        cart: changedCart,
      };
    }
    case ActionTypes.RESET_CART:
      localStorage.removeItem("CoffeeDelivery:1.0/items");
      return {
        cart: [],
      };
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const changedCart = state.cart.filter(
        (product) => product.id !== payload.product.id
      );
      localStorage.setItem(
        "CoffeeDelivery:1.0/items",
        JSON.stringify(changedCart)
      );
      return {
        cart: changedCart,
      };
    }
    case ActionTypes.GET_STORED_LIST: {
      if (!!localStorage.getItem("CoffeeDelivery:1.0/items")) {
        const localStoredItems = JSON.parse(
          localStorage.getItem("CoffeeDelivery:1.0/items")!
        );
        return { cart: localStoredItems };
      }
    }
    default:
      return state;
  }
}
