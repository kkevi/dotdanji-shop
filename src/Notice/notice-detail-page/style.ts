import {createStyles, makeStyles} from "@mui/styles"
import {Theme} from "@mui/material"

const styles = makeStyles((theme: Theme) =>
    createStyles({
        htmlContainer: {
            fontWeight: 200,
            "& h1": {
                fontSize: "1.3rem",
                fontWeight: 800,
                fontFamily: "'yg-jalnan'",
            },
            "& h2": {
                fontSize: "1.1rem",
                fontWeight: 800,
                lineHeight: 2.3,
            },
            "& img": {
                maxWidth: "100%",
                margin: "40px 0 ",
            },
            "& span": {
                fontWeight: 600,
                lineHeight: 2.3,
            },
            "& strong,p": {
                fontWeight: 400,
                lineHeight: 2.3,
            },
        },
        htmlContainerMobile: {
            fontWeight: 200,
            "& h1": {
                fontSize: "1.3rem",
                fontWeight: 800,
                fontFamily: "'yg-jalnan'",
            },
            "& h2": {
                fontSize: "1.1rem",
                fontWeight: 800,
                lineHeight: 2.3,
            },
            "& img": {
                maxWidth: "100%",
                margin: "40px 0 ",
            },
            "& span": {
                fontWeight: 600,
                lineHeight: 2.3,
            },
            "& strong,p": {
                fontSize: "0.8rem",
                fontWeight: 400,
                lineHeight: 1.8,
            },
        },
    }),
)

export default styles
