import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        deliveryMessage: {
            marginBottom: 4,
            fontSize: theme.breakpoints.down("sm") ? 14 : 16,
        },
        divider: {
            height: theme.breakpoints.down("sm") ? 1 : 2,
            backgroundColor: theme.palette.secondary.dark,
        },
        rootStack: {
            marginTop: 20,
            width: theme.breakpoints.down("sm") ? "100%" : "30%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",

            "& .MuiButton-outlined": {
                width: theme.breakpoints.down("sm") ? "100%" : 150,
                background: "#fff",
                color: "#222",
                height: theme.breakpoints.down("sm") ? 45 : 55,
                border: "1px solid #222",
            },
            "& .MuiButton-contained": {
                width: theme.breakpoints.down("sm") ? "100%" : 150,
                height: theme.breakpoints.down("sm") ? 45 : 55,
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
