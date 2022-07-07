import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        gomiImage: {
            position: "absolute",
            zIndex: 5,
            top: 200,
            left: 0,
            animationName: "$moveUp",
            animationIterationCount: "infinite",
            animationDuration: "1.5s",
        },
        pongguImage: {
            position: "absolute",
            zIndex: 5,
            top: 170,
            right: -90,
            animationName: "$moveUp",
            animationIterationCount: "infinite",
            animationDuration: "1.5s",
        },

        "@keyframes moveUp": {
            "0%": {transform: "translateY(0)"},
            "60%": {transform: "translateY(15%)"},
            "100%": {transform: "translateY(0)"},
        },
    }),
)

export default styles
