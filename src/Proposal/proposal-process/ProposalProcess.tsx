import React from "react"
import {Typography, Stack} from "@mui/material"

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"

type ProposalProcessProps = {
    index: number
    title: string
}

export default function ProposalProcess(props: ProposalProcessProps) {
    const {index, title} = props

    return (
        <>
            <Stack
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width={180}
                height={180}
                mx={3}
                style={{borderRadius: 100, backgroundColor: "rgba(208,235,245,0.1)", border: "1px solid #babcbc"}}
            >
                <Typography color="#757575" variant="caption" mb={0.5} fontWeight={800}>
                    0{index + 1}
                </Typography>
                <Typography fontSize={20} fontWeight={800}>
                    {title}
                </Typography>
            </Stack>
            {index < 2 ? <ArrowForwardRoundedIcon fontSize="large" /> : undefined}
        </>
    )
}
