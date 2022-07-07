import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        gomiImage: {
            position: "absolute",
            zIndex: 5,
            top: 300,
            left: -89,
            "& > div:nth-child(1)": {
                position: "absolute",
                top: 96,
                left: 4,
                transformOrigin: "right center",
                animationName: "$moveShake",
                animationIterationCount: "infinite",
                animationDuration: "1.5s",
            },
        },

        "@keyframes moveShake": {
            "0%": {transform: "rotate(0)"},
            "50%": {transform: "rotate(-15deg)"},
            "100%": {transform: "rotate(0)"},
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
