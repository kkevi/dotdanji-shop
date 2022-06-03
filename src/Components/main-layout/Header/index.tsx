import React from "react"
import HeaderWeb from "./HeaderWeb"
import HeaderMobile from "./HeaderMobile"
import {useMediaQuery, useTheme} from "@mui/material"

export default function Header() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    return <>{mobile ? <HeaderMobile /> : <HeaderWeb />}</>
}
