import {action, computed, makeObservable, observable} from "mobx"

export default class UserStore {
    constructor() {
        makeObservable(this)
    }

    @observable private _userName: string = ""

    @computed get userName(): string {
        return this._userName
    }

    @action setUserName(userName: string) {
        this._userName = userName
    }
}
