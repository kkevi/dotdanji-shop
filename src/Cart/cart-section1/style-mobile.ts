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
        columnStack: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        divider: {
            height: 1,
            backgroundColor: theme.palette.secondary.dark,
        },
        countButtonBox: {
            marginRight: 16,
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid #726C60",
        },
    }),
)

export default styles
