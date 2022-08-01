import React, {useEffect, useState} from "react"
import axios from "axios"
import {ProductItemDefaultData, ProductItemType} from "types/product-type"
import BestSellerMobile from "./BestSellerMobile"
import BestSellerWeb from "./BestSellerWeb"

type Props = {
    isMobile: boolean
}

export default function BestSeller(props: Props) {
    const {isMobile} = props
    const [bestSellerList, setBestSellerList] = useState<ProductItemType[]>([ProductItemDefaultData])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        axios.defaults.withCredentials = true

        const stage = process.env.NEXT_PUBLIC_AWS_API_DOTDANJI_STAGE
        const id = process.env.NEXT_PUBLIC_DB_DOTDANJI_GOODS_ID // goods table 가져옴
        try {
            await axios({
                url: `/api/${stage}/${id}`,
                method: "GET",
                withCredentials: true, // 쿠키 cors 통신 설정 허용
                headers: {
                    "Access-Control-Allow-Origin": "https://dotdanji.com",
                    "Content-Type": "application/json",
                },
                params: {
                    categoryId: "all",
                },
            })
                .then(response => {
                    setBestSellerList(response.data.message)
                })
                .catch(function (error) {
                    console.log("axios error:", error)
                })
        } catch (error) {
            //응답 실패
            console.error("try error:", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        axios.defaults.withCredentials = true

        const stage = process.env.NEXT_PUBLIC_AWS_API_DOTDANJI_STAGE
        const id = process.env.NEXT_PUBLIC_DB_DOTDANJI_GOODS_ID // goods table 가져옴
        try {
            await axios({
                url: `/api/${stage}/${id}`,
                method: "GET",
                withCredentials: true, // 쿠키 cors 통신 설정 허용
                headers: {
                    "Access-Control-Allow-Origin": "https://dotdanji.com",
                    "Content-Type": "application/json",
                },
                params: {
                    categoryId: "all",
                },
            })
                .then(response => {
                    setBestSellerList(response.data.message)
                })
                .catch(function (error) {
                    console.log("axios error:", error)
                })
        } catch (error) {
            //응답 실패
            console.error("try error:", error)
        }
    }

    return (
        <>
            {isMobile ? (
                <BestSellerMobile bestSellerList={bestSellerList} />
            ) : (
                <BestSellerWeb bestSellerList={bestSellerList} />
            )}
        </>
    )
}
