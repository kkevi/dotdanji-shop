import Footer from "./Footer"
import Topbar from "./Topbar"

type Props = {
    children: React.ReactNode
    bgcolor?: string
}

export default function MainLayout(props: Props) {
    const {children, bgcolor = "#fff"} = props
    return (
        <div>
            <Topbar />
            <div style={{backgroundColor: bgcolor}}>{children}</div>
            <Footer />
        </div>
    )
}
