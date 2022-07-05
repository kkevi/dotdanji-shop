import {IconButton, Stack, Typography} from "@mui/material"
import {useRouter} from "next/router"

import React from "react"
import ImageBox from "src/Components/image-box/ImageBox"

type Props = {
    userName?: string
    isLoggedIn?: boolean
    mobile?: boolean
}

export default function UserLoginButton(props: Props) {
    const route = useRouter()
    const {userName, isLoggedIn, mobile} = props

    return (
        <Stack>
            <IconButton onClick={() => route.push(isLoggedIn ? "/mypage" : "/login")}>
                <ImageBox width={mobile ? 30 : 36} height={mobile ? 30 : 36} src="/icons/icon-mypage2.png" />
            </IconButton>
            <Typography variant="caption" mt={isLoggedIn ? -1 : 0}>
                {isLoggedIn && userName + "님"}
            </Typography>
        </Stack>
    )
}
