import {makeStyles, createStyles} from "@mui/styles"
import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        headerDefaultStyle: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "white",
            // backgroundImage: "url('/images/img_header_bg2.png')",
            // backgroundSize: "54px",
            zIndex: 10,
        },
        titleButton: {
            color: theme.palette.secondary.dark,
            fontFamily: "ONE-Mobile-POP",
            textShadow: "1px 3px 1px #fff",
            "&:hover": {
                backgroundColor: "white",
                color: theme.palette.primary.dark,
            },
        },
    }),
)

export default styles
