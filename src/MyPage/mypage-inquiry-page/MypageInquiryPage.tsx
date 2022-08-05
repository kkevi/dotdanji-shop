import React, {useState} from "react"

import {Divider, Stack, Typography, useMediaQuery, useTheme} from "@mui/material"

import MyPageHeader from "../mypage-header/MyPageHeader"
import FaqAccordion from "src/Service/faq-page/faq-accordion/FaqAccordion"
import PaginationBox from "src/Components/pagination-box/PaginationBox"

import useStyles from "./style"
import {Container} from "@mui/system"
import {InquiryDataType} from "./InquiryType"
import InquiryAccordion from "./InquiryAccordion/InquiryAccordion"

const FAKE_FAQ_DATA: InquiryDataType[] = [
    {
        answered: true,
        title: "현금영수증을 발행하고 싶습니다.",
        content:
            "현금영수증 발행은 [실시간 계좌이체] 또는 [가상계좌(무통장입급)]의 방법으로 상품 결제 시 현금영수증 발행 용도를 체크 후 주민번호 또는 휴대폰 번호를 입력해 주시면 발행이 가능합니다. 상품 결제 이후 발급 요청은 '국세청 홈페이지' 또는 'KCP 현금영수증'을 통해 발행 가능합니다.",
    },
    {
        answered: true,
        title: "기기에 문제가 생겼습니다.",
        content:
            "해당 기기의 설명서를 참고해주세요. 설명서에 기재 되어있는 문의 연락처로 연락 부탁드립니다. 소프트웨어에 문제가 있다면 dotdanji@simbaat.com 이메일로 문제되는 화면 캡쳐와 내용을 보내주세요.",
    },
    {
        answered: false,
        title: "배송이 얼마나 걸리나요?",
        content: "",
    },
]

export default function MypageInquiryPage() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const classes = useStyles()
    const [expanded, setExpanded] = useState<string | false>("panel")
    const [faqList, setFaqList] = useState<InquiryDataType[]>(FAKE_FAQ_DATA)
    const [activePage, setActivePage] = useState(1)

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber)
    }

    return (
        <Stack py={mobile ? 9.5 : 13.5}>
            <MyPageHeader title="마이페이지" subtitle={"1:1 문의 내역"} mobile={mobile} />
            <Container>
                <Typography
                    variant="h5"
                    mt={mobile ? 6 : 16}
                    mb={1}
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                >
                    # 1:1 문의 내역
                </Typography>

                <Divider className={classes.divider} flexItem />

                <Stack direction="column" justifyContent="center" alignItems="center">
                    {faqList
                        .map((data, index) => {
                            return (
                                <InquiryAccordion
                                    index={index}
                                    key={"faqAccordion" + index}
                                    answered={data.answered}
                                    title={data.title}
                                    content={data.content}
                                    setExpanded={setExpanded}
                                    expanded={expanded}
                                    mobile={mobile}
                                />
                            )
                        })
                        .reverse()}
                    <Divider className={classes.divider} flexItem />

                    <PaginationBox
                        activePage={activePage}
                        dataLength={faqList.length}
                        handlePageChange={handlePageChange}
                    />
                </Stack>
            </Container>
        </Stack>
    )
}
