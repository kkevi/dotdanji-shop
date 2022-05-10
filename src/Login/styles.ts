import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        socialLogin: {
            width: 45,
            height: 45,
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
            width: 30,
            height: 30,
            borderRadius: "50%",
            objectFit: "contain",
        },
        textField: {
            "& label.Mui-focused": {
                color: "black",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
            },
        },
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
            fontSize: 14,
            "&:hover": {
                cursor: "pointer",
            },
        },
    }),
)

export default styles
