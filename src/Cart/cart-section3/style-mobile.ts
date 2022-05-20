import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        deliveryMessage: {
            marginBottom: 4,
            fontSize: 14,
        },
        divider: {
            height: 1,
            backgroundColor: theme.palette.secondary.dark,
        },
        rootStack: {
            marginTop: 20,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",

            "& .MuiButton-outlined": {
                width: "100%",
                background: "#fff",
                color: "#222",
                height: 45,
                border: "1px solid #222",
            },
            "& .MuiButton-contained": {
                width: "100%",
                height: 45,
                background: "#222",
                color: "#fff",
            },
        },
        rowStackMobile: {
            flexDirection: "row",
            justifyContent: "space-between",
            "& p": {
                marginBottom: 4,
                fontSize: 14,
                color: "#959595",
            },
            "& p:last-child": {
                width: "70%",
                color: "#000",
            },
        },
    }),
)

export default styles
