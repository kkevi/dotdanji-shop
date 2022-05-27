import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
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
        link: {
            fontWeight: 700,
            textDecoration: "underline",
            cursor: "pointer",
        },
    }),
)

export default styles
