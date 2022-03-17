import {IconButton, Badge} from "@mui/material"
import {useRouter} from "next/router"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"

type Props = {
    badgeContent: number
}

export default function ShopCartButton(props: Props) {
    const router = useRouter()
    const {badgeContent} = props
    return (
        <IconButton sx={{marginRight: 2}} onClick={() => router.push("/cart")}>
            <Badge
                badgeContent={badgeContent}
                color="primary"
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <ShoppingCartRoundedIcon style={{color: "white", fontSize: "28px"}} />
            </Badge>
        </IconButton>
    )
}
