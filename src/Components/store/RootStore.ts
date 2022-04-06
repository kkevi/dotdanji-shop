import log from "./log"
import UserStore from "./UserStore"
import {RootStoreInitialState} from "./types"

/**
 * @class Mobx 루트 스토어
 * @property {IntlStore} intlStore - UI 상태
 * @property {ProjectLayoutStore} projectLayoutStore - 프로젝트 레이아웃
 */
class RootStore {
    /**
     * ProfileStore
     */
    userStore = new UserStore()

    /**
     * hydrate
     */
    hydrate = (data: RootStoreInitialState | null | undefined) => {
        log.debug("store hydrate:", data)
    }
}

export default RootStore
