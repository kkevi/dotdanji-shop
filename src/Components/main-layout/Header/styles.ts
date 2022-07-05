import {makeStyles, createStyles} from "@mui/styles"
import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        titleButton: {
            color: theme.palette.secondary.dark,
            fontFamily: "ONE-Mobile-POP",
            "&:hover": {
                backgroundColor: "white",
                // color: theme.palette.secondary.light,
                color: theme.palette.primary.dark,
            },
        },
    }),
)

export default styles
