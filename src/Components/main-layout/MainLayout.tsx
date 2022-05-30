import React from "react"
import Header from "./Header"
import Footer from "./Footer"

type Props = {
    children: React.ReactNode
    bgcolor?: string
}

export default function MainLayout(props: Props) {
    const {children, bgcolor = "#fff"} = props

    return (
        <div>
            <Header />
            <div style={{backgroundColor: bgcolor}}>{children}</div>
            <Footer />
        </div>
    )
}
