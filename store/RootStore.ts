import log from "./log"
import {RootStoreInitialState} from "./types"
import UserStore from "./UserStore"
import GoodsStore from "./UserStore copy"

/**
 * @class Mobx 루트 스토어
 */
class RootStore {
    /**
     * ProfileStore
     */
    userStore = new UserStore()
    goodsStore = new GoodsStore()

    /**
     * hydrate
     */
    hydrate = (data: RootStoreInitialState | null | undefined) => {
        log.debug("store hydrate:", data)
    }
}

export default RootStore
