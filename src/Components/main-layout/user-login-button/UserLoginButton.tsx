import {IconButton} from "@mui/material"
import {useRouter} from "next/router"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

export default function UserLoginButton() {
    const route = useRouter()
    return (
        <IconButton onClick={() => route.push("/login")}>
            <AccountCircleIcon style={{color: "white", fontSize: "28px"}} />
        </IconButton>
    )
}
