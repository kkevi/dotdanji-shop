import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 210,
            borderRadius: 20,
            boxShadow: "0px 22px 32px -18px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
        },
        box2: {
            justifyContent: "center",
            alignItems: "center",
            width: 280,
            height: 92,
            borderRadius: 20,
            border: "1px solid #DBE0E5",
            cursor: "pointer",
        },
        iconBig: {
            width: 40,
            height: 40,
            color: theme.palette.primary.dark,
        },
        iconSmall: {
            width: 32,
            height: 32,
            color: "#303E4E",
        },
        container: {
            padding: 30,
            minHeight: 678,
            borderRadius: 20,
            boxShadow: "0px 22px 32px -18px rgba(0, 0, 0, 0.2)",
            // backgroundColor: "antiquewhite",
        },
    }),
)

export default styles
