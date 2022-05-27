import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        socialLogin: {
            width: theme.breakpoints.down("sm") ? 35 : 45,
            height: theme.breakpoints.down("sm") ? 35 : 45,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, .2)",
            "&:hover": {
                cursor: "pointer",
            },
        },
        socialImage: {
            width: theme.breakpoints.down("sm") ? 20 : 30,
            height: theme.breakpoints.down("sm") ? 20 : 30,
            borderRadius: "50%",
            objectFit: "contain",
        },
    }),
)

export default styles
