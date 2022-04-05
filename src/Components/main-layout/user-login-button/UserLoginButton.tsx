import {IconButton, Stack, Typography} from "@mui/material"
import {useRouter} from "next/router"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import {useTheme} from "@mui/system"
import {useSessionStorage} from "react-use"

type Props = {
    userName: string | undefined
}
export default function UserLoginButton(props: Props) {
    const {userName} = props
    const route = useRouter()
    const theme = useTheme()
    const [isLoggedIn, setIsLoggedIn] = useSessionStorage<boolean>("login")

    return (
        <Stack>
            <IconButton onClick={() => route.push(isLoggedIn ? "/mypage" : "/login")}>
                <AccountCircleIcon style={{color: theme.palette.secondary.dark, fontSize: "28px"}} />
            </IconButton>
            {userName !== "" && <Typography>{userName}님</Typography>}
        </Stack>
    )
}
