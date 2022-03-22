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
        rootStack: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
            marginTop: 100,

            "& .MuiButton-contained": {
                marginTop: "2rem",
                background: "#fff",
                color: "#222",
                "&:last-child": {
                    marginLeft: "1rem",
                    background: "#222",
                    color: "#fff",
                },
            },
        },
        countButtonBox: {
            marginRight: 16,
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid #726C60",
        },
    }),
)

export default styles
