import React from "react"
import {Stack, Typography} from "@mui/material"

export default function ExtraInformation() {
    const text1 = [
        "배송비 : 기본 배송료는 3,000원이며, 5만원 이상 구매시 무료배송입니다. (도서, 산간, 오지 등 일부 지역은 배송비가 추가될 수 있습니다.)",
        "택배사 : 우체국 택배를 이용하고 있습니다.",
        "제품은 결제 확인 후 3-7일(주말/공휴일 제외)안에 배송 됩니다.",
        "상품이 일시품절이면 배송이 지연될 수 있습니다. 품절인 경우는 결제가 취소될 수 있습니다.",
        "국내/해외 배송 모두 가능합니다. 단, 해외 배송은 택배사 혹은 국가에 따라 배송일이 늘어날 수 있습니다.",
        "출고 후, 배송 상황은 해당 택배사를 통해 확인하실 수 있습니다.",
    ]
    const text2 = [
        "상품 수령일 7일 이내 반품/환불 가능합니다. (일부 품목 제외)",
        "실물 제품이 아닌, 코드 혹은 디지털 상품(구독권 등)은 발송 후, 반품/환불이 불가능 합니다.",
        "반품 및 교환을 원하실 경우, 홈페이지 고객센터>1:1문의에서 신청이 가능합니다.",
        "고객변심으로 인한 교환은 왕복 배송비(6,000원)가 부과됩니다.",
        "고객변심으로 인한 반품은 편도 배송비(3,000원)가 부과됩니다.",
        "상품결함으로 인한 반품의 경우, 심바트에서 배송비를 부담합니다.",
        "이벤트 상품 또는 추가 구성품이 있는 경우, 해당 상품을 함께 교환/반품해야 합니다.",
        "출고 이후 환불요청 시, 상품을 회수/확인 과정이 끝난 후 처리됩니다.",
    ]
    const text3 = [
        "고객님의 책임있는 사유로 상품이 손실 또는 훼손된 경우",
        "환급 반품 기한(상품 수령일 7일)이 초과된 경우",
        "상품의 박스, 포장, 비닐 패킹을 제거한 경우",
        "제품을 사용하여 제품 가치가 현저히 감소한 경우",
        "이벤트 상품이나 구성품을 반납하지 않은 경우",
    ]

    return (
        <Stack width="100%" minHeight="100vh" mb={16} mt={20}>
            <Typography className="pointFont" color="#777" alignSelf="flex-start" mb={2}>
                # 배송정보
            </Typography>
            {text1.map((text, idx) => (
                <Typography variant="body2" mb={1} color="#999" key={"ExtraInformation_text_1-" + idx}>
                    {text}
                </Typography>
            ))}

            <Typography className="pointFont" color="#777" alignSelf="flex-start" mt={6} mb={2}>
                # 교환/환불/AS 안내
            </Typography>
            {text2.map((text, idx) => (
                <Typography variant="body2" mb={1} color="#999" key={"ExtraInformation_text_2-" + idx}>
                    {text}
                </Typography>
            ))}
            <Typography className="pointFont" color="#777" alignSelf="flex-start" mt={6} mb={2}>
                교환 및 환불 불가능한 경우 안내
            </Typography>
            {text3.map((text, idx) => (
                <Typography variant="body2" mb={1} color="#999" key={"ExtraInformation_text_3-" + idx}>
                    {text}
                </Typography>
            ))}
        </Stack>
    )
}
