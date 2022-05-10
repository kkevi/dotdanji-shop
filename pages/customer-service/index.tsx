import React, {useEffect} from "react"
import {routerPush} from "src/lib/routerPush"

export default function Index() {
    useEffect(() => {
        routerPush("/customer-service/notice")
    }, [])
    return null
}
