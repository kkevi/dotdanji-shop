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
        thumbnail: {
            position: "relative",
            width: "100%",
            height: "fit-content",

            "& > .MuiButtonBase-root": {
                width: "100%",
            },

            "& img:hover": {
                filter: "brightness(0.8)",
            },
        },
        titleArea: {
            display: "flex",
            width: "100%",
            textAlign: "right",
            flexDirection: "column",
            alignItems: "flex-end",
        },

        iconButtonList: {
            display: "flex",
            fiexDirection: "row",
            position: "absolute",
            bottom: 0,
            right: "1rem",
            zIndex: 5,
            background: "#fff",
            transition: "0.5s",

            "&:hover": {
                bottom: 12,
            },
        },
    }),
)

export default styles
