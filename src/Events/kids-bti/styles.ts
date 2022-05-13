import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: "calc(100vh - 108px)",
            backgroundColor: "white",
            margin: "50px auto",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "130px 15px",
        },

        contents: {
            fontSize: 18,
            fontWeight: 800,
            marginBottom: 20,
        },
    }),
)

export default styles
