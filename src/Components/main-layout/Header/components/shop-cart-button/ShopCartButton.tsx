import {IconButton, Badge} from "@mui/material"
import {useRouter} from "next/router"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import {useTheme} from "@mui/material"

type Props = {
    badgeContent: number
}

export default function ShopCartButton(props: Props) {
    const route = useRouter()
    const theme = useTheme()
    const {badgeContent} = props

    return (
        <IconButton sx={{marginRight: 2}} onClick={() => route.push("/cart")}>
            <Badge
                badgeContent={badgeContent}
                color="primary"
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <ShoppingCartRoundedIcon style={{color: theme.palette.secondary.dark, fontSize: "28px"}} />
            </Badge>
        </IconButton>
    )
}
