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
                color: "#222",
                height: 55,
                border: "1px solid #222",
            },
            "& .MuiButton-contained": {
                marginTop: "2rem",
                height: 55,
                marginLeft: "1rem",
                background: "#222",
                color: "#fff",
            },
        },
    }),
)

export default styles
