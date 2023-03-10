import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
            textAlign: "right",
            display: "flex",
            flexDirection: "column",

            "&:hover": {},

            "& .MuiTypography-body2  span": {
                marginRight: theme.spacing(1.5),
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
            right: "0.5rem",
            zIndex: 5,
            background: "#fff",
            transition: "0.5s",

            "&:hover": {
                bottom: 12,
            },
        },

        iconButtonListMobile: {
            display: "flex",
            fiexDirection: "row",
            position: "absolute",
            bottom: 0,
            right: "0.5rem",
            zIndex: 5,
            background: "#fff",
            "& button": {
                padding: 6,
            },
        },
    }),
)

export default styles
