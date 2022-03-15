import {createStyles, makeStyles} from "@mui/styles"

const styles = makeStyles(
    createStyles({
        root: {
            flexShrink: 0,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#eee",
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
