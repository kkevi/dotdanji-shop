import React from "react"
import {styled} from "@mui/material/styles"
import {Typography, useTheme} from "@mui/material"
import MuiAccordion, {AccordionProps} from "@mui/material/Accordion"
import MuiAccordionSummary, {AccordionSummaryProps} from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"

// 아코디언 메인
const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
    ({theme}) => ({
        borderBottom: `1px solid rgba(0,0,0,0.08)`,
        width: "100%",
        "&:before": {
            display: "none",
        },
        "& .MuiSvgIcon-root": {
            fontSize: "1.8rem",
        },
    }),
)

// 아코디언 제목
const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosRoundedIcon sx={{fontSize: "0.9rem"}} />} {...props} />
))(({theme}) => ({
    backgroundColor: "white",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(180deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
        display: "flex",
        alignItems: "center",
    },
}))

// 아코디언 내용
const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: `${theme.spacing(4)} ${theme.spacing(12)}`,
    backgroundColor: "rgba(0, 0, 0, .02)",
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

type InquiryAccordionProps = {
    index: number
    answered: boolean
    title: string
    content: string
    expanded: string | boolean
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>
    mobile: boolean
}

export default function InquiryAccordion(prop: InquiryAccordionProps) {
    const {index, answered, title, content, expanded, setExpanded, mobile} = prop
    const theme = useTheme()

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon fontSize="large" color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{p: mobile ? `12px 0` : 2}}
            >
                <Typography
                    fontSize={mobile ? 14 : 20}
                    fontWeight={700}
                    mr={mobile ? 1 : 2}
                    color={theme.palette.primary.main}
                >
                    Q.
                </Typography>
                <Typography
                    fontSize={mobile ? 12 : 14}
                    mr={mobile ? 2 : 3}
                    color={theme.palette.primary.main}
                    fontWeight={600}
                >
                    {answered ? "답변 완료" : "답변 대기"}
                </Typography>
                <Typography fontSize={mobile ? 14 : 18}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{p: mobile ? 5 : "auto"}}>
                <Typography fontSize={mobile ? 14 : 16} color="#757575">
                    {answered ? content : "문의 내역을 확인 중입니다."}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
