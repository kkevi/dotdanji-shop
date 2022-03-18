import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            width: "100%",

            "& .slick-dots": {
                bottom: "2rem",
            },
        },
        slideBox: {},
        infoBox: {
            width: "40%",
            backdropFilter: "brightness(95%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 100px",

            "& .MuiButton-contained": {
                marginTop: "2rem",
                background: "#fff",
                color: "#222",
                "&:last-child": {
                    background: "#222",
                    color: "#fff",
                },
            },
        },
    }),
)

export default styles
