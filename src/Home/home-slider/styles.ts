import {makeStyles, createStyles} from "@mui/styles"
import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        button: {
            position: "relative",
            justifyContent: "center",
            "&:hover": {
                cursor: "pointer",
            },
        },
        buttonText: {
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0%)",
        },
    }),
)

export default styles
