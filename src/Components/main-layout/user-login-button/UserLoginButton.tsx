import {IconButton, Stack, Typography} from "@mui/material"
import {useRouter} from "next/router"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import {useTheme} from "@mui/system"

type Props = {
    isLoggedIn?: {name: string; email: string} | null
}

export default function UserLoginButton(props: Props) {
    const {isLoggedIn} = props
    const route = useRouter()
    const theme = useTheme()

    return (
        <Stack>
            <IconButton onClick={() => route.push(isLoggedIn ? "/mypage" : "/login")}>
                <AccountCircleIcon style={{color: theme.palette.secondary.dark, fontSize: "28px"}} />
            </IconButton>
            {isLoggedIn && (
                <Typography variant="caption" mt={-1}>
                    {isLoggedIn.name}님
                </Typography>
            )}
        </Stack>
    )
}
