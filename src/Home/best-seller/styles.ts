import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            fontSize: 12,
            fontWeight: 700,
            color: "white",
            border: "1px solid white",
            "&:hover": {
                color: "white",
                fontWeight: 700,
                border: "1px solid white",
            },
        },
        stack: {
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0)",
            transition: "background .2s linear",
            "&:hover": {
                background: "rgba(0, 0, 0, 0.4)",
                cursor: "pointer",
            },
        },
        title: {
            fontSize: 18,
            color: "white",
        },
        titleMobile: {
            fontSize: 14,
            color: "#777777",
        },
        price: {
            fontSize: 15,
            fontWeight: 700,
            color: "white",
        },
        priceMobile: {
            fontSize: 12,
            color: "#777777",
        },
    }),
)

export default styles
