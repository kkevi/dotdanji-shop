import {makeStyles, createStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: any) =>
    createStyles({
        root: {
            display: "block",
            position: "relative",
            flexShrink: 0,
            overflow: "hidden",
            // backgroundColor: "#eee",
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.5s",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
        },
        hover: {
            "&:hover": {
                width: "120%",
            },
        },
    }),
)

export default styles
