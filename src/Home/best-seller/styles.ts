import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        button: {
            fontSize: 12,
            fontWeight: 700,
            color: "white",
            border: "1px solid white",
            "&:hover": {
                color: "white",
                fontWeight: 700,
                border: "1px solid white",
            },
        },
        stack: {
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0)",
            transition: "background .2s linear",
            "&:hover": {
                background: "rgba(0, 0, 0, 0.4)",
                cursor: "pointer",
            },
        },
        title: {
            fontSize: 18,
            color: "white",
        },
        titleMobile: {
            fontSize: 14,
            color: "#777777",
        },
        price: {
            fontSize: 15,
            fontWeight: 700,
            color: "white",
        },
        priceMobile: {
            fontSize: 12,
            color: "#777777",
        },
        bombomImage: {
            marginLeft: -70,
            animationName: "$moveSwing",
            animationIterationCount: "infinite",
            animationDuration: "3s",
            marginBottom: 10,
        },

        "@keyframes moveSwing": {
            "0%": {transform: "translate(0,0)"},
            "60%": {transform: "translate(15%,10%) rotate(-10deg)"},
            "100%": {transform: "translateY(0,0)"},
        },

        starfishImage: {
            position: "absolute",
            bottom: -160,
            right: 150,
            animationName: "$moveLeft",
            animationIterationCount: "infinite",
            animationDuration: "10s",
        },

        "@keyframes moveLeft": {
            "0%": {right: 150, transform: "rotate(5deg)"},
            "20%": {transform: "rotate(-5deg)"},
            "30%": {transform: "rotate(5deg)"},
            "40%": {transform: "rotate(-5deg)"},
            "50%": {right: 250, transform: "rotate(5deg)"},
            "60%": {transform: "rotate(-5deg)"},
            "80%": {transform: "rotate(5deg)"},
            "90%": {transform: "rotate(-5deg)"},
            "100%": {right: 150, transform: "rotate(5deg)"},
        },
    }),
)

export default styles
