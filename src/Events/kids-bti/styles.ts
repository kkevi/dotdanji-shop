import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
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
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            borderRadius: 20,
            backgroundColor: "rgba(208, 235, 245, 0.5)",

            ".result": {
                fontSize: 40,
            },
        },
    }),
)

export default styles
