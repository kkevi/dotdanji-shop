import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        containedButton: {
            height: 56,
            backgroundColor: "black",
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: "black",
                fontWeight: 700,
            },
        },
        outlinedButton: {
            height: 45,
            fontSize: 12,
            fontWeight: 700,
            color: "black",
            border: "1px solid black",
            borderRadius: 30,
            "&:hover": {
                color: "black",
                fontWeight: 700,
                border: "1px solid black",
            },
        },
        link: {
            fontWeight: 700,
            textDecoration: "underline",
            cursor: "pointer",
        },
    }),
)

export default styles
