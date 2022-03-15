import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document"
import {ServerStyleSheets} from "@mui/styles"

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* google search tag */}
                    <meta name="keywords" content="교재,완구,헬스케어,어린이,유아" />
                    <meta name="description" content="세상을 이롭게 바꾸는, 심바트의 웹 쇼핑 사이트입니다." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/* Open Graph 중 필수 적으로 해줘야하는 것들 */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://shop.simbaat.com" />
                    <meta property="og:title" content="Simbaat" />
                    <meta property="og:image" content="" />
                    <meta property="og:description" content="세상을 이롭게 바꾸는, 심바트의 웹 쇼핑 사이트입니다." />
                    <meta property="og:site_name" content="Simbaat Shop" />
                    <meta property="og:locale" content="kr_KR" />
                    {/* 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 */}
                    {/* <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" /> */}

                    {/* 소셜 미디어, 블로그 등의 메타정보 표시 */}
                    {/* <meta property="twitter:card" content="" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => materialSheets.collect(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                {materialSheets.getStyleElement()}
            </>
        ),
    }
}

// MyDocument.getInitialProps = async (ctx: DocumentContext) => {
//     const sheets = new ServerStyleSheets()
//     const originalRenderPage = ctx.renderPage
//     try {
//         ctx.renderPage = () =>
//             originalRenderPage({
//                 // enhanceApp: App => props => sheets.collectStyles(<App {...props} />),
//                 enhanceApp: App => props => sheets.collect(<App {...props} />),
//             })

//         const initialProps = await Document.getInitialProps(ctx)
//         return {
//             ...initialProps,
//             styles: (
//                 <>
//                     {initialProps.styles}
//                     {sheets.getStyleElement()}
//                 </>
//             ),
//         }
//     } finally {
//         // sheets.seal()
//     }
// }
