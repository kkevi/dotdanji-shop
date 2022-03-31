import {IconButton} from "@mui/material"
import {useRouter} from "next/router"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import {useTheme} from "@mui/system"
export default function UserLoginButton() {
    const route = useRouter()
    const theme = useTheme()

    return (
        <IconButton onClick={() => route.push("/login")}>
            <AccountCircleIcon style={{color: theme.palette.secondary.dark, fontSize: "28px"}} />
        </IconButton>
    )
}
