import React from "react"
import {useRouter} from "next/router"
import {Stack, Typography} from "@mui/material"

import ImageBox from "Components/image-box/ImageBox"

type EBookItemProps = {
    title: string
    url: string
    images: string
}

export default function EBookItem({title, url, images}: EBookItemProps) {
    const route = useRouter()

    return (
        <Stack direction="column" justifyContent="center" alignItems="center">
            <ImageBox
                height={220}
                src={images}
                style={{borderRadius: 10, cursor: "pointer"}}
                onClick={() => route.push("#")}
            />

            <Typography mt={2} fontSize={16} fontWeight={700}>
                {title}
            </Typography>
        </Stack>
    )
}
