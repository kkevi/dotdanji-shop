import {CartOptionsType} from "src/Cart/cart-type"
import {action, computed, makeObservable, observable} from "mobx"

export default class GoodsStore {
    constructor() {
        makeObservable(this)
    }

    @observable private _cartItem: CartOptionsType[] | undefined = undefined

    @computed get cartItem(): CartOptionsType[] | undefined {
        return this._cartItem
    }

    @action setCartItem(cartItem: CartOptionsType[] | undefined) {
        this._cartItem = cartItem
    }
}
