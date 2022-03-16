import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            textAlign: "right",
            display: "flex",
            flexDirection: "column",

            "&:hover": {},

            "& .MuiTypography-body2  span": {
                marginRight: theme.spacing(2),
                textDecoration: "line-through", //텍스트 중간선
                color: theme.palette.secondary.light,
            },
        },
        thumnail: {
            position: "relative",
            width: "100%",
            height: "fit-content",

            "& > .MuiButtonBase-root": {
                width: "100%",
            },
        },
        titleArea: {
            display: "flex",
            width: "100%",
            textAlign: "right",
            flexDirection: "column",
            alignItems: "flex-end",
        },
    }),
)

export default styles
