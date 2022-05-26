import {makeStyles, createStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: any) =>
    createStyles({
        deliveryMessage: {
            marginBottom: 4,
            fontSize: 16,
        },
        divider: {
            height: 2,
            backgroundColor: theme.palette.secondary.dark,
        },
        rootStack: {
            marginTop: 20,
            width: "30%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",

            "& .MuiButton-outlined": {
                width: 150,
                background: "#fff",
                color: "#222",
                height: 55,
                border: "1px solid #222",
            },
            "& .MuiButton-contained": {
                width: 150,
                height: 55,
                background: "#222",
                color: "#fff",
            },
        },
    }),
)

export default styles
