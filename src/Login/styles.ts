import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        textField: {
            "& label.Mui-focused": {
                color: "black",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
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
        title: {
            fontSize: 18,
            color: "black",
        },
        price: {
            fontSize: 15,
            fontWeight: 700,
            color: "black",
        },
        findLink: {
            color: "#757575",
            fontSize: theme.breakpoints.down("sm") ? 12 : 14,
            "&:hover": {
                cursor: "pointer",
            },
        },
    }),
)

export default styles
