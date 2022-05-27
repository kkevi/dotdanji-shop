import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            backgroundColor: "#2d2d2d",
            color: "#777",
            fontSize: "0.85rem",

            //Container
            "& MuiContainer-root": {},

            //Link
            "& .MuiLink-root": {
                // color: theme.palette.primary.light,
            },
        },
        footerTextArea: {
            color: "#cccccc",
            opacity: 0.8,
        },
    }),
)

export default styles
