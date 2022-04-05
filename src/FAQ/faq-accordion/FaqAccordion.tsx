import React from "react"
import {styled} from "@mui/material/styles"
import {Typography} from "@mui/material"
import MuiAccordion, {AccordionProps} from "@mui/material/Accordion"
import MuiAccordionSummary, {AccordionSummaryProps} from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import {useTheme} from "@mui/system"

// 아코디언 메인
const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
    ({theme}) => ({
        borderBottom: `1px solid rgba(0,0,0,0.08)`,
        width: "100%",
        "&:before": {
            display: "none",
        },
    }),
)

// 아코디언 제목
const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosRoundedIcon sx={{fontSize: "0.9rem"}} />} {...props} />
))(({theme}) => ({
    backgroundColor: "white",
    flexDirection: "row",
    padding: `${theme.spacing(2)}`,
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

type FaqAccordionProps = {
    idx: number
    title: string
    content: string
    expanded: string | boolean
    handleChange: (val: string) => void
}

export default function FaqAccordion(prop: FaqAccordionProps) {
    const {idx, title, content, expanded, handleChange} = prop
    const theme = useTheme()

    return (
        <Accordion expanded={expanded === `panel${idx}`} onChange={handleChange(`panel${idx}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon fontSize="large" color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography fontSize={20} fontWeight={700} mr={2} color={theme.palette.primary.main}>
                    Q.
                </Typography>
                <Typography fontSize={18}>
                    {title}
                    {idx}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color="#757575">{content}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}
