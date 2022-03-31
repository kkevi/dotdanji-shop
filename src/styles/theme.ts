import {createTheme} from "@mui/material/styles"

export const theme = createTheme({
    typography: {
        fontFamily: [
            "NanumSquareRoundLight",
            "NanumSquareRound",
            "NanumSquareRoundBold",
            "NanumSquareRoundExtraBold",
        ].join(","),
    },
    palette: {
        primary: {
            // light: "#8A8EE1",
            // main: "#595E9E",
            // dark: "#232552",
            light: "#D0EBF5",
            main: "#80c3f3",
            dark: "#4286e4",
            contrastText: "#fff",
        },
        secondary: {
            light: "#FFD059",
            main: "#f44336",
            // dark: "#ba000d",
            dark: "#232552",
            contrastText: "#000",
        },
        grey: {
            "100": "#ffffff",
            "200": "#e0e0e0",
            "300": "#bdbdbd",
            "400": "#9f9f9f",
            "500": "#757575",
            "600": "#616161",
            "700": "#424242",
            "800": "#363636",
            "900": "#242424",
        },
    },
})
