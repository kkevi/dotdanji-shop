import {CartItemProps} from "Cart/cart-type"
import {action, computed, makeObservable, observable} from "mobx"

export default class GoodsStore {
    constructor() {
        makeObservable(this)
    }

    @observable private _cartItemList: CartItemProps[] = []

    @computed get cartItemList(): CartItemProps[] {
        return this._cartItemList
    }

    @action setCartItemList(cartItemList: CartItemProps[]) {
        this._cartItemList = cartItemList
    }
}
