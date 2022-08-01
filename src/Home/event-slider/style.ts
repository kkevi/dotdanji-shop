import {makeStyles, createStyles} from "@mui/styles"

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

        outlinedButton: {
            height: 40,
            fontSize: 12,
            fontWeight: 700,
            color: "#777",
            border: "1px solid #777",
            "&:hover": {
                color: "black",
                fontWeight: 700,
                border: "1px solid black",
            },
        },
    }),
)

export default styles
