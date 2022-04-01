import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        terms: {},
        textField: {
            marginBottom: 30,
            backgroundColor: "rgba(208,235,245,0.1)",
            borderRadius: 4,
        },
        lastTextField: {
            color: "#646566",
            backgroundColor: "rgba(208,235,245,0.1)",
            borderRadius: 4,
            "& .Mui-disabled": {
                color: "#646566",
            },
        },
        button: {
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
        button2: {
            marginLeft: 8,
            fontSize: 13,
            color: "#646566",
            border: "1px solid #babcbc",
            backgroundColor: "rgba(208,235,245,0.1)",
            "&:active": {
                color: theme.palette.primary.dark,
                border: `1px solid ${theme.palette.primary.dark}`,
            },
        },
    }),
)

export default styles