import { api } from "../api";

export function getShoppingCartApi() {
    return api.get('client/get-cart')
}

export interface IAddItemApi {
    item: IAddItemItemApi
}
export interface IAddItemItemApi {
    idProduct: string
    quantity: number
}
export function addItemApi(data: IAddItemApi) {
    return api.post('client/add-item', data)
}

export interface IChangeItemQuantityApi {
    item: IChangeItemQuantityItemApi
}
export interface IChangeItemQuantityItemApi {
    idProduct: string
    quantity: number
}
export function changeItemQuantityApi(data: IChangeItemQuantityApi) {
    return api.put('client/change-item-quantity', data)
}

export function deleteItemApi(idProduct: string) {
    return api.delete('client/delete-item/' + idProduct)
}

export interface IGetPriceApi {
    idDeliveryType: string
}
export function getPriceApi(data: IGetPriceApi) {
    return api.post('client/get-price', data)
}