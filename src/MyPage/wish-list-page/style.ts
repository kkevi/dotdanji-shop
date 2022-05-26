import {makeStyles, createStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: any) =>
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
        countButtonBox: {
            marginRight: 16,
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid #726C60",
        },
    }),
)

export default styles
