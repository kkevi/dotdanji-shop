import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import ResultPage from "src/Survey/kids-bti/result-page/ResultPage"

export default function Index() {
    const route = useRouter()
    const [result, setResult] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setResult(route.query.result)
    }, [route])

    return (
        <MainLayout>
            <Stack pt={13.5} sx={{backgroundColor: "rgba(208, 235, 245, 0.5)"}}>
                <ResultPage result={result as string} />
            </Stack>
        </MainLayout>
    )
}
