import {action, computed, makeObservable, observable} from "mobx"

export default class UserStore {
    constructor() {
        makeObservable(this)
    }

    @observable private _isLoggedIn: boolean = false
    @observable private _refreshToken: string = ""
    @observable private _userName: string = ""

    @computed get isLoggedIn(): boolean {
        return this._isLoggedIn
    }
    @computed get refreshToken(): string {
        return this._refreshToken
    }
    @computed get userName(): string {
        return this._userName
    }

    @action setIsLoggedIn(isLoggedIn: boolean) {
        this._isLoggedIn = isLoggedIn
    }
    @action setRefreshToken(refreshToken: string) {
        this._refreshToken = refreshToken
    }
    @action setUserName(userName: string) {
        this._userName = userName
    }
}
