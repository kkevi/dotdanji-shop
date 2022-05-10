import React from "react"
import {AppProps} from "next/app"
import Head from "next/head"

import {CssBaseline, ThemeProvider} from "@mui/material"
import "react-toastify/dist/ReactToastify.css"
import {theme} from "styles/theme"
import {GlobalStyle} from "styles/global-styles"
import {ToastContainer} from "react-toastify"

import StoreProvider from "Components/store/StoreProvider"
import UserLoginObserver from "Components/observer/UserLoginObserver"

function MyApp(props: AppProps) {
    const {Component, pageProps} = props

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
                {/* font */}
                <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css" rel="stylesheet" />

                {/* <!-- jQuery --> */}
                {/* <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script> */}
                {/* <!-- iamport.payment.js --> */}
                {/* <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></script> */}
            </Head>
            <StoreProvider rootStoreInitialState={undefined}>
                <UserLoginObserver>
                    <ThemeProvider theme={theme}>
                        <>
                            <CssBaseline />
                            <GlobalStyle />
                            <Component {...pageProps} />
                        </>
                    </ThemeProvider>
                </UserLoginObserver>
            </StoreProvider>
            <ToastContainer autoClose={2000} pauseOnHover={false} hideProgressBar />
        </React.Fragment>
    )
}
export default MyApp
