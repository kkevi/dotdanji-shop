import {useEffect} from "react"

type Props = {
    children: React.ReactNode
}

export default function LoginObserver(props: Props) {
    const {children} = props

    useEffect(() => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY)
        window.Kakao.isInitialized()
    }, [])

    return <>{children}</>
}
