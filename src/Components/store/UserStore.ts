import {action, computed, makeObservable, observable} from "mobx"

export default class UserStore {
    constructor() {
        makeObservable(this)
    }

    @observable private _userName: string | undefined = undefined
    @observable private _refreshToken: string | undefined = undefined

    @computed get userName(): string | undefined {
        return this._userName
    }
    @computed get refreshToken(): string | undefined {
        return this._refreshToken
    }

    @action setUserName(userName: string | null | undefined) {
        this._userName = userName ?? undefined
    }

    @action setRefreshToken(refreshToken: string | null | undefined) {
        this._refreshToken = refreshToken ?? undefined
    }
}
