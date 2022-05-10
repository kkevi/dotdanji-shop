import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        containedButton: {
            height: 56,
            backgroundColor: "black",
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            "&:hover": {
                backgroundColor: "black",
                fontWeight: 700,
            },
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
