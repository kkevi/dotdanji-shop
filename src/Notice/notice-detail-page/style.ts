import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        htmlContainer: {
            fontWeight: 200,
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
