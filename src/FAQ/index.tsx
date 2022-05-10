import React, {useState} from "react"
import {useTheme} from "@mui/system"
import {Stack, IconButton, InputBase, Typography, Divider, Chip} from "@mui/material"

import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import FaqAccordion from "./faq-accordion/FaqAccordion"

import {categoryList} from "Inquiry/InquiryDataType"
import PaginationBox from "Component/pagination-box/PaginationBox"

export default function Index() {
    const theme = useTheme()
    const [expanded, setExpanded] = useState<string | false>("panel")
    const [activePage, setActivePage] = useState(1)

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber)
    }

    const handleClick = () => {
        console.log("You clicked the Chip.")
    }

    return (
        <Stack mt={2}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                py={4}
                mx={6}
                sx={{
                    with: "100%",
                    backgroundColor: "rgba(208, 235, 245, .5)",
                    borderTopLeftRadius: 18,
                    borderBottomRightRadius: 18,
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    px={2}
                    py={0.5}
                    sx={{width: 600, backgroundColor: "white", borderRadius: 8}}
                >
                    <InputBase
                        sx={{ml: 1, flex: 1, fontSize: 18}}
                        placeholder="궁금한 것을 검색해보세요."
                        inputProps={{"aria-label": "search keyword"}}
                    />
                    <IconButton type="submit" sx={{p: "10px"}} aria-label="search">
                        <SearchRoundedIcon />
                    </IconButton>
                </Stack>
            </Stack>

            {/* chips */}
            <Stack py={4} px={6} direction="row" justifyContent="center" alignItems="center" spacing={4}>
                <Chip
                    label={<Typography fontSize={16}>전체</Typography>}
                    sx={{padding: "12px 8px"}}
                    variant="outlined"
                    onClick={handleClick}
                />
                {Object.values(categoryList).map((itm, idx) => (
                    <Chip
                        label={<Typography fontSize={16}>{itm}</Typography>}
                        sx={{padding: "12px 8px"}}
                        variant="outlined"
                        onClick={handleClick}
                    />
                ))}
            </Stack>

            {/* 아코디언 */}
            <Stack direction="column" justifyContent="center" alignItems="center" px={6}>
                <Divider flexItem sx={{borderBottom: "2px solid #777777"}} />
                {fakeAccordionData.map((itm, idx) => {
                    return (
                        <FaqAccordion
                            idx={idx}
                            title={itm.title}
                            content={itm.content}
                            setExpanded={setExpanded}
                            expanded={expanded}
                        />
                    )
                })}

                <PaginationBox
                    activePage={activePage}
                    dataLength={fakeAccordionData.length}
                    handlePageChange={handlePageChange}
                />
            </Stack>
        </Stack>
    )
}

const fakeAccordionData = [
    {
        title: "제목제목",
        content: "학습비 미결제 시 매 영업일에 결제 요청이 진행됩니다. 결제 가능한 상태라면 익일 결제가 진행됩니다.",
    },
    {
        title: "제목제목",
        content: "아니오. 결제일이 되기 전에는 학습비를 미리 결제할 수 없습니다.",
    },
    {
        title: "제목제목",
        content:
            "결제 상품의 학습 만료일은 심키즈 홈페이지에 학습생 아이디로 로그인 후 [마이페이지 > 결제정보] 를 클릭하거나 T-spoon(학부모 앱)에 접속 후 왼쪽 상단의 [메뉴 > 결제정보] 클릭 시 확인 가능합니다.",
    },
    {
        title: "제목제목",
        content:
            "현금영수증 발행은 [실시간 계좌이체] 또는 [가상계좌(무통장입급)]의 방법으로 상품 결제 시 현금영수증 발행 용도를 체크 후 주민번호 또는 휴대폰 번호를 입력해 주시면 발행이 가능합니다. 상품 결제 이후 발급 요청은 '국세청 홈페이지' 또는 'KCP 현금영수증'을 통해 발행 가능합니다.",
    },
    {
        title: "제목제목",
        content:
            "월납 상품의 경우 12개월과 24개월 약정으로 두 가지 상품으로 이루어져 있습니다.        • 24개월 약정 월납 상품 : 월 119,000원        • 12개월 약정 월납 상품 : 월 149,000원 결제는 카드 결제만 가능하며, 처음 결제한 날을 기준으로 매월 해당 일에 자동이체 됩니다. 결제일이 주말 및 공휴일인 경우 다음 영업일에 결제가 진행됩니다.(ex) 31일, 30일, 29일이 결제일인 경우",
    },
]
