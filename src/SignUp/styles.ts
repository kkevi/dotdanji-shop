import {makeStyles, createStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: any) =>
    createStyles({
        containedButton: {
            marginTop: theme.breakpoints.down("sm") ? theme.spacing(3) : theme.spacing(6),
            height: theme.breakpoints.down("sm") ? 45 : 56,
            backgroundColor: "black",
            color: "white",
            fontSize: theme.breakpoints.down("sm") ? 14 : 16,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: "black",
                fontWeight: 700,
            },
        },
        outlinedButton: {
            height: 45,
            fontSize: 12,
            fontWeight: 700,
            color: "black",
            border: "1px solid black",
            borderRadius: 30,
            "&:hover": {
                color: "black",
                fontWeight: 700,
                border: "1px solid black",
            },
        },
        link: {
            fontWeight: 700,
            textDecoration: "underline",
            cursor: "pointer",
        },
        textField: {
            "& label.Mui-focused": {
                color: "black",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
            },
        },
        smallButton: {
            marginLeft: 8,
            marginBottom: theme.breakpoints.down("sm") ? 15 : 30,
            fontSize: 12,
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
