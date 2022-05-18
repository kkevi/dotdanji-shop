import React from "react"

import {Stack, Typography} from "@mui/material"
import {useTheme} from "@mui/system"

import ImageBox from "components/image-box/ImageBox"

type NewArrivalMobileProps = {
    idx: number
    id: string
    title: string
    image: string
}

export default function NewArrivalMobile(props: NewArrivalMobileProps) {
    const {idx, id, title, image} = props
    const theme = useTheme()

    return (
        <Stack alignItems="flex-start" mb={4} key={id}>
            <ImageBox width="100%" height={450} src={image} />

            <Typography mt={2} ml={3} fontSize={18} className="pointFont" color={theme.palette.primary.main}>
                {`0${idx + 1} `}
            </Typography>
            <Typography ml={3} fontWeight={800} fontSize={18} color="#222">
                {title}
            </Typography>
        </Stack>
    )
}
