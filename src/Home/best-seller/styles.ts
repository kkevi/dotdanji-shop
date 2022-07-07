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
    }),
)

export default styles
