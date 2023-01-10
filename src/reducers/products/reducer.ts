// import { Cart, Product } from "../../context/ProductContext";
// import { AddressProps } from "../../pages/Checkout";
// import { ActionTypes } from "./actions";

// interface ActionReducerTypes {
//   type: ActionTypes;
//   payload?: Product;
// }

// interface ProductsState {
//   cart: Cart;
//   address: AddressProps;
// }

// export function productsReducer(
//   state: ProductsState,
//   { type, payload }: ActionReducerTypes
// ) {
//   switch (type) {
//     case ActionTypes.ADD_PRODUCT_TO_CART: {
//         return Produ
//       //   const currentCycleIndex = state.cycles.findIndex((cycle) => {
//       //     return cycle.id === state.activeCycleId;
//       //   });
//       //   if (currentCycleIndex < 0) return state;
//       //   return produce(state, (draft) => {
//       //     draft.activeCycleId = null;
//       //     draft.cycles[currentCycleIndex].interruptedDate = new Date();
//       //   });
//     }
//     case ActionTypes.REMOVE_PRODUCT_FROM_CART:
//     //   return produce(state, (draft) => {
//     //     if (payload) {
//     //       draft.cycles.push(payload);
//     //       draft.activeCycleId = payload.id;
//     //     }
//     //   });
//     case ActionTypes.CONFIRM_PURCHASE: {
//       //   const currentCycleIndex = state.cycles.findIndex((cycle) => {
//       //     return cycle.id === state.activeCycleId;
//       //   });
//       //   if (currentCycleIndex < 0) return state;
//       //   return produce(state, (draft) => {
//       //     draft.activeCycleId = null;
//       //     draft.cycles[currentCycleIndex].finishedDate = new Date();
//       //   });
//     }
//     default:
//       return state;
//   }
// }
