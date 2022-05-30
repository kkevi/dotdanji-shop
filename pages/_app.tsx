import React from "react"
import type {AppProps} from "next/app"
import Head from "next/head"

import StoreProvider from "../store/StoreProvider"
import LoginObserver from "components/login-observer/LoginObserver"
import {CssBaseline, ThemeProvider} from "@mui/material"

import {theme} from "styles/theme"
import {GlobalStyle} from "styles/global-styles"

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

declare global {
    interface Window {
        Kakao: any
    }
}

function MyApp({Component, pageProps}: AppProps) {
    return (
        <React.Fragment>
            <Head>
                <title>SIMKIDS</title>
                <meta name="description" content="Generated by create next app" />
                {/* favicon */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#ffe32d" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="theme-color" content="#fff9bf" />
            </Head>
            <StoreProvider rootStoreInitialState={undefined}>
                <ThemeProvider theme={theme}>
                    <LoginObserver>
                        <>
                            <CssBaseline />
                            <GlobalStyle />
                            <Component {...pageProps} />
                        </>
                    </LoginObserver>
                </ThemeProvider>
            </StoreProvider>
            <ToastContainer autoClose={2000} pauseOnHover={false} hideProgressBar />
        </React.Fragment>
    )
}
export default MyApp
