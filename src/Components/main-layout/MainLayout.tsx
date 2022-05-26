import React from "react"

import useMediaQuery from "@mui/material/useMediaQuery"

import Topbar from "./Topbar"
import TopbarMobile from "./TopbarMobile"
import Footer from "./Footer"
import {useTheme} from "@mui/material"
type Props = {
    children: React.ReactNode
    bgcolor?: string
}

export default function MainLayout(props: Props) {
    const {children, bgcolor = "#fff"} = props
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div>
            {mobile ? <TopbarMobile /> : <Topbar />}
            <div style={{backgroundColor: bgcolor}}>{children}</div>
            <Footer />
        </div>
    )
}
