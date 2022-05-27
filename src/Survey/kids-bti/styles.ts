import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        container: {
            height: "calc(92vh - 108px)",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "130px 15px",
        },

        title: {
            fontSize: 22,
            color: theme.palette.secondary.dark,
        },

        contents: {
            fontSize: 18,
            lineHeight: "30px",
            fontWeight: 800,
            color: theme.palette.secondary.dark,
        },

        containedButton: {
            width: "50%",
            height: 56,
            backgroundColor: theme.palette.secondary.dark,
            color: "white",
            fontSize: 18,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                fontWeight: 700,
            },
        },

        progress: {
            width: "100%",
            height: 10,
            borderRadius: 20,
            "& .MuiLinearProgress-barColorPrimary": {
                backgroundColor: theme.palette.primary.dark,
            },
        },

        answerButton: {
            margin: "8px 0",
            width: "50%",
            height: 56,
            borderColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.dark,
            fontSize: 16,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.dark,
                fontWeight: 700,
            },
        },

        resultContainer: {
            padding: "60px 38px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            // height: "100%",
            textAlign: "center",
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            backgroundColor: "white",
        },

        score: {
            fontSize: 40,
            color: theme.palette.primary.dark,
        },

        contents2: {
            fontSize: 16,
            color: theme.palette.secondary.dark,
        },

        resultButton: {
            width: "50%",
            height: 56,
            border: `1px solid ${theme.palette.primary.dark}`,
            color: theme.palette.primary.dark,
            fontSize: 16,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.dark,
                fontWeight: 700,
            },
        },

        divider: {
            width: "35%",
            height: 1,
            backgroundColor: "#9D9D9D",
        },

        caption: {
            color: "#9D9D9D",
        },
        socialLogin: {
            width: 35,
            height: 35,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, .2)",
            "&:hover": {
                cursor: "pointer",
            },
        },
        socialImage: {
            width: 25,
            height: 25,
            borderRadius: "50%",
            objectFit: "contain",
        },

        contentButton: {
            width: "30%",
            height: 56,
            border: `1px solid ${theme.palette.primary.dark}`,
            // color: theme.palette.primary.dark,
            fontSize: 16,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.dark,
                fontWeight: 700,
            },
            "&:after": {
                backgroundColor: "red",
            },
        },
    }),
)

export default styles
