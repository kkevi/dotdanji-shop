import React from "react"
import {useRouter} from "next/router"
import {Container, Typography, Stack, Tabs, Tab} from "@mui/material"

import ImageBox from "Components/image-box/ImageBox"
import {useTheme} from "@mui/system"

function tabProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    }
}

type ServiceLayoutProps = {
    index: number
    children: React.ReactNode
}

export default function ServiceLayout({index, children}: ServiceLayoutProps) {
    const theme = useTheme()
    const route = useRouter()

    const tabs = [
        {
            phrase: "심키즈의 새로운 소식입니다.",
            title: "공지사항",
            color: theme.palette.primary.light,
            image: "",
        },

        {
            phrase: "무엇을 도와드릴까요?",
            title: "FAQ",
            color: theme.palette.primary.main,
            image: "",
        },

        {
            phrase: "소중한 문의에 답변드립니다.",
            title: "1:1 문의",
            color: theme.palette.primary.dark,
            image: "",
        },
    ]

    return (
        <Stack>
            <Stack justifyContent="center" alignItems="center" height={300} sx={{backgroundColor: tabs[index].color}}>
                <Typography className="pointFont" fontSize={32} color="white">
                    {tabs[index].phrase}
                </Typography>
                <Typography className="pointFont" mt={1} fontSize={18} color={theme.palette.secondary.light}>
                    {tabs[index].title}
                </Typography>
                {/* <div><ImageBox /></div> */}
            </Stack>
            <Stack>
                <Container maxWidth="lg">
                    <Tabs centered value={index}>
                        <Tab
                            sx={{padding: 3}}
                            label={<Typography fontSize={18}>공지사항</Typography>}
                            onClick={() => route.push("/notice")}
                            {...tabProps(0)}
                        />
                        <Tab
                            label={<Typography fontSize={18}>FAQ</Typography>}
                            onClick={() => route.push("/faq")}
                            {...tabProps(1)}
                        />
                        <Tab
                            label={<Typography fontSize={18}>1:1 문의</Typography>}
                            onClick={() => route.push("/inquiry")}
                            {...tabProps(2)}
                        />
                    </Tabs>

                    <Stack py={8}>{children}</Stack>
                </Container>
            </Stack>
        </Stack>
    )
}
