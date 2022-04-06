import {IconButton, Stack, Typography} from "@mui/material"
import {useRouter} from "next/router"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import {useTheme} from "@mui/system"
import React from "react"

type Props = {
    userName?: string
}

export default function UserLoginButton(props: Props) {
    const route = useRouter()
    const theme = useTheme()
    const {userName} = props
    //isLoggedIn ? "/mypage" : "/login"

    return (
        <Stack>
            <IconButton onClick={() => route.push("/login")}>
                <AccountCircleIcon style={{color: theme.palette.secondary.dark, fontSize: "28px"}} />
            </IconButton>
            <Typography variant="caption" mt={-1}>
                {userName && userName + "님"}
            </Typography>
        </Stack>
    )
}
