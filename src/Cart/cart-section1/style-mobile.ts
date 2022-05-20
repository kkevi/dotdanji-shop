import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        rootStack: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        containedButton: {
            marginTop: "2rem",
            height: 55,
            background: "#222",
            color: "#fff",
        },
        divider: {
            height: 1,
            backgroundColor: theme.palette.secondary.dark,
        },
    }),
)

export default styles
