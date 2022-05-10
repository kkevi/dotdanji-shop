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
                width: 140,
                background: "#fff",
                color: "#222",
                height: 55,
                border: "1px solid #222",
            },
            "& .MuiButton-contained": {
                width: 140,
                height: 55,
                marginLeft: "1rem",
                background: "#222",
                color: "#fff",
            },
        },
        divider: {
            height: 2,
            backgroundColor: theme.palette.secondary.dark,
        },
        textField: {
            marginBottom: 30,
            backgroundColor: "rgba(208,235,245,0.1)",
            borderRadius: 4,
        },
        disabledTextField: {
            marginBottom: 30,
            color: "#646566",
            backgroundColor: "rgba(208,235,245,0.1)",
            borderRadius: 4,
            "& .Mui-disabled": {
                color: "#646566",
            },
        },
        button2: {
            marginLeft: 16,
            width: 170,
            fontSize: 14,
            fontWeight: 500,
            color: "#646566",
            border: "1px solid #babcbc",
            backgroundColor: "rgba(208,235,245,0.1)",
            "&:active": {
                color: theme.palette.primary.dark,
                border: `1px solid ${theme.palette.primary.dark}`,
            },
        },
        rightStack: {
            "& .rightStackColumn": {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            },
            "& .MuiTypography-root": {
                fontSize: 15,
                color: "#757575",
            },
        },
        payButton: {
            // marginTop: "2rem",
            background: "#fff",
            color: "#222",
            height: 40,
            border: "1px solid #222",
        },

        link: {
            fontWeight: 700,
            textDecoration: "underline",
            cursor: "pointer",
        },
    }),
)

export default styles
