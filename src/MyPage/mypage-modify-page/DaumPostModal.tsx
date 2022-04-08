import React from "react"
import DaumPostcode from "react-daum-postcode"

import {Dialog} from "@mui/material"
import {MyPageModifyFormProps} from "./mypage-modify-type"

type DaumPostModalTypes = {
    setFormData: React.Dispatch<React.SetStateAction<MyPageModifyFormProps>>
    visibleModal: boolean
    setVisibleModal: (val: boolean) => void
}

export default function DaumPostModal(prop: DaumPostModalTypes) {
    const {setFormData, visibleModal, setVisibleModal} = prop
    const handleComplete = (data: any) => {
        let postCode: string = data.zonecode
        let fullAddress: string = data.address
        let extraAddress = ""

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
        }

        console.log(postCode) // 우편번호
        console.log(fullAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

        setFormData(prev => {
            return {
                ...prev,
                postCode: postCode,
                address: fullAddress,
            }
        })
        setVisibleModal(false)
    }

    const onClose = () => {
        setVisibleModal(false)
    }

    return (
        <Dialog open={visibleModal} onClose={onClose} maxWidth="lg">
            <DaumPostcode onComplete={handleComplete} />
        </Dialog>
    )
}
