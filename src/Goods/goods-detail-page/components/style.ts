import {makeStyles, createStyles} from "@mui/styles"
import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        tabWrapper: {
            position: "sticky",
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

        htmlContainer: {
            fontWeight: 200,
            textAlign: "center",
            "& h1": {
                fontSize: theme.breakpoints.down("sm") ? "1.2rem" : "2rem",
                fontWeight: 800,
                fontFamily: "'yg-jalnan'",
                lineHeight: "2.5rem",
            },
            "& h2": {
                fontSize: theme.breakpoints.down("sm") ? "1rem" : "1.1rem",
                fontWeight: 800,
                lineHeight: 2.3,
            },
            "& img": {
                maxWidth: "100%",
                margin: "40px 0 ",
            },
            "& span": {
                fontWeight: 600,
                lineHeight: 2.3,
            },
            "& strong,p": {
                fontWeight: 400,
                lineHeight: 2.3,
            },
        },
    }),
)

export default styles
