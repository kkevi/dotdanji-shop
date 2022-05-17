import React from "react"
import {useTheme} from "@mui/system"
import {useMediaQuery} from "@mui/material"

import HomeWeb from "./HomeWeb"
import HomeMobile from "./HomeMobile"

export default function Home() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    return <>{mobile ? <HomeMobile /> : <HomeWeb />}</>
}
