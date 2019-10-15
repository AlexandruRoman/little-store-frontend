import { ApplicationState } from "../types";

export const getShoppingCartItems = (state: ApplicationState) => state.shoppingCart.shoppingCartItems
export const getPrices = (state: ApplicationState) => state.shoppingCart.prices
export const getDeliveryType = (state: ApplicationState) => state.shoppingCart.deliveryType