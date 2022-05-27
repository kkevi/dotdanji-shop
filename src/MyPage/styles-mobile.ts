import {makeStyles, createStyles} from "@mui/styles"

import {theme} from "src/styles/theme"

const styles = makeStyles(() =>
    createStyles({
        box: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            borderRadius: 20,
            boxShadow: "0px 22px 32px -18px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
        },
        box2: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: 50,
            borderRadius: 20,
            border: "1px solid #DBE0E5",
            cursor: "pointer",
            backgroundColor: "#fff",
        },
        iconBig: {
            width: 25,
            height: 25,
            color: theme.palette.primary.dark,
            marginBottom: theme.spacing(1),
        },
        iconSmall: {
            width: 20,
            height: 20,
            color: "#303E4E",
        },
        container: {
            padding: 30,
            width: "100%",
            minHeight: 678,
            borderRadius: 20,
            boxShadow: "0px 22px 32px -18px rgba(0, 0, 0, 0.2)",
            // backgroundColor: "antiquewhite",
        },
        disabledTextField: {
            color: "#646566",
            backgroundColor: "rgba(208,235,245,0.1)",
            borderRadius: 4,
            // marginBottom: theme.spacing(-10),
            "& .Mui-disabled": {
                color: "#646566",
            },
        },
        button: {
            marginTop: 16,
            padding: "12px 60px",
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.primary.dark,
            border: `1px solid ${theme.palette.primary.dark}`,
            "&:hover": {
                color: theme.palette.primary.main,
                fontWeight: 700,
                border: `1px solid ${theme.palette.primary.main}`,
            },
        },
        button2: {
            marginLeft: 16,
            width: 170,
            fontSize: 14,
            fontWeight: 500,
            color: "#646566",
            border: "1px solid #babcbc",
            backgroundColor: "rgba(208,235,245,0.1)",
            "&:active": {
                color: theme.palette.primary.dark,
                border: `1px solid ${theme.palette.primary.dark}`,
            },
        },
    }),
)

export default styles
