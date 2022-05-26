import React, {useEffect, useState} from "react"
import {useMediaQuery} from "@mui/material"

import useStore from "store/useStore"

//types
import {CartOptionsType} from "types/cart-type"
import {CartFormDefaultData, CartFormProps} from "types/cart-type"
import {RequestPayProps, RequestPayResponse} from "types/payment-type"
import {useTheme} from "@mui/material"
import CartSection2Web from "./CartSection2Web"
import CartSection2Mobile from "./CartSection2Mobile"

type Props = {
    onChangeNextStep: (index: number) => void
}

declare global {
    interface Window {
        IMP: any
    }
}

export default function CartSection2(props: Props) {
    const {onChangeNextStep} = props
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const {userStore, goodsStore} = useStore()
    const [formData, setFormData] = useState<CartFormProps>(CartFormDefaultData)

    //장바구니 데이터 표시
    const [cartItemList, setCartItemList] = useState<CartOptionsType[]>([])
    /*
    실제 구매 데이터 생성
    {optionId:선택여부}
    */
    const [checkList, setCheckList] = useState<Record<string, boolean>>(new Object() as Record<string, boolean>)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    //배송비 - 50,000원이상 무료
    const deliveryPrice = totalPrice >= 50000 ? 0 : 3000

    /*
     * 총 금액 계산
     */
    useEffect(() => {
        _handleDisplayPrice()
    }, [cartItemList])

    const _handleDisplayPrice = () => {
        setTotalPrice(
            Object.entries(checkList).reduce((acc, cur) => {
                const data = cartItemList.filter(it => it.optionId === cur[0])[0]
                if (cur[1]) {
                    acc += data.price * data.count
                }
                return acc
            }, 0),
        )
    }

    /*
     * 장바구니 데이터 가져오기
     */
    useEffect(() => {
        if (goodsStore.cartItem !== undefined) {
            setCartItemList(goodsStore.cartItem)
        }
    }, [])

    const IMP = window.IMP // 생략 가능
    IMP.init("{Merchant ID}") // Example: imp00000000

    const handlePayment = () => {
        window.IMP?.init("iamport")

        // 휴대폰번호 자르기
        const subPhonNumber = formData.phoneNumber.substring(0, 3)
        const subPhonNumber2 = formData.phoneNumber.substring(2, 4)
        const subPhonNumber3 = formData.phoneNumber.substring(6, 4)
        const phoneNumber = `${subPhonNumber}-${subPhonNumber2}-${subPhonNumber3}`

        // 주소 합치기
        const address = formData.address
        const addressDetailed = formData.addressDetailed
        const totalAddress = addressDetailed ? `${address} ${addressDetailed}` : address

        const data: RequestPayProps = {
            pg: "html5_inicis",
            pay_method: "card",
            merchant_uid: "ORD20180131-0000011",
            name: "노르웨이 회전 의자",
            amount: 35000,
            buyer_email: "gildong@gmail.com",
            buyer_name: formData.name,
            buyer_tel: phoneNumber,
            buyer_addr: totalAddress,
            buyer_postcode: formData.postCode,
        }

        const callback = (response: RequestPayResponse) => {
            const {success, merchant_uid, error_msg, imp_uid, error_code} = response
            if (success) {
                console.log(response)
            } else {
                console.log(response, "error_code:", error_code)
            }
        }
        window.IMP?.request_pay(data, callback)
    }

    // 결제하기 버튼 눌렀을 때
    const onClickOrder = () => {
        // if (formData.name === "") return toast.error("수령인을 입력해주세요.")
        // if (formData.postCode === "" || formData.address === "") return toast.error("주소를 입력해주세요.")
        // if (formData.phoneNumber === "") return toast.error("전화번호를 입력해주세요.")
        // if (formData.payment === "") return toast.error("결제방법을 선택해주세요.")
        // if (!formData.agree) return toast.error("약관동의를 해주세요.")

        // if (formData.payment === "credit") {
        //     // 신용/체크카드
        //     console.log("신용/체크카드")
        //     // handlePayment()
        // } else if (formData.payment === "cash") {
        //     // 무통장입금
        //     console.log("무통장입금")
        //     // handlePayment()
        // } else if (formData.payment === "naver") {
        //     // 네이버페이
        //     console.log("네이버페이")
        // } else if (formData.payment === "kakao") {
        //     // 카카오페이
        //     console.log("카카오페이")
        // }
        onChangeNextStep(2)
    }

    return (
        <>
            {mobile ? (
                <CartSection2Mobile
                    cartItemList={cartItemList}
                    formData={formData}
                    setFormData={setFormData}
                    deliveryPrice={deliveryPrice}
                    totalPrice={totalPrice}
                    onClickOrder={onClickOrder}
                />
            ) : (
                <CartSection2Web
                    cartItemList={cartItemList}
                    formData={formData}
                    setFormData={setFormData}
                    deliveryPrice={deliveryPrice}
                    totalPrice={totalPrice}
                    onClickOrder={onClickOrder}
                />
            )}
        </>
    )
}
