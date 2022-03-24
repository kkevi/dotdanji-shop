import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        rootStack: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            "& .MuiButton-contained": {
                marginTop: "2rem",
                background: "#fff",
                color: "#222",
                height: 55,
                "&:last-child": {
                    marginLeft: "1rem",
                    background: "#222",
                    color: "#fff",
                    height: 55,
                },
            },
        },
        columnStack: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        divider: {
            height: 2,
            backgroundColor: "black",
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
