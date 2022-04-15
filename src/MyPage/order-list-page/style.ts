import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        rootStack: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            "& .MuiButton-outlined": {
                marginTop: "2rem",
                background: "#fff",
                color: theme.palette.secondary.dark,
                height: 55,
                border: `1px solid ${theme.palette.secondary.dark}`,
            },
            "& .MuiButton-contained": {
                marginTop: "2rem",
                height: 55,
                marginLeft: "1rem",
                background: theme.palette.secondary.dark,
                color: "#fff",
            },
        },
        columnStack: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        divider: {
            height: 2,
            backgroundColor: theme.palette.secondary.dark,
        },
        submitButton: {
            padding: "12px 28px",
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.primary.dark,
            border: `1px solid ${theme.palette.primary.dark}`,
            "&:hover": {
                color: theme.palette.primary.main,
                fontWeight: 700,
                border: `1px solid ${theme.palette.primary.main}`,
            },
        },
        countButtonBox: {
            marginRight: 16,
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid #726C60",
        },
        smallButton: {
            color: "#333",
            height: 38,
            border: `1px solid ${theme.palette.secondary.dark}`,
            opacity: 0.8,
        },
        autocomplete: {
            marginBottom: 30,
            width: 200,
            backgroundColor: "rgba(208,235,245,0.1)",
        },
        textField: {
            marginBottom: 30,
            backgroundColor: "rgba(208,235,245,0.1)",
            borderRadius: 4,
        },
    }),
)

export default styles
