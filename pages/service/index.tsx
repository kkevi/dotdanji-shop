import React, {useEffect} from "react"
import {routerPush} from "lib/routerPush"

export default function Index() {
    useEffect(() => {
        routerPush("/service/notice")
    }, [])
    return null
}
