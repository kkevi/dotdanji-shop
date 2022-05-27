import {makeStyles, createStyles} from "@mui/styles"
import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        containedButton: {
            height: 56,
            backgroundColor: "black",
            color: "white",
            fontSize: theme.breakpoints.down("sm") ? 14 : 16,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: "black",
                fontWeight: 700,
            },
        },
    }),
)

export default styles
