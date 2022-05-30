import {makeStyles, createStyles} from "@mui/styles"
import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        tabWrapper: {
            position: "sticky",
            top: 76,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
        },
        tab: {
            padding: `${theme.spacing(3)} 0`,
            fontSize: 15,
            textAlign: "center",
            cursor: "pointer",
            color: "#999",
        },
        active: {
            fontWeight: 800,
            color: theme.palette.primary.dark,
        },
        bar: {
            margin: "0 10px",
            width: 1,
            height: 15,
            backgroundColor: "#999",
        },
    }),
)

export default styles
