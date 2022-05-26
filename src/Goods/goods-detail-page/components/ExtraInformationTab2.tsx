import React from "react"
import {Stack, Typography} from "@mui/material"

export default function ExtraInformationTab2() {
    return (
        <Stack width="100%" mb={16}>
            <Typography className="pointFont" color="#777" alignSelf="flex-start" mb={2}>
                # 배송정보
            </Typography>
            <Typography variant="body2" color="#999">
                배송비 : 기본 배송료 mb={2}는 3,000원이며, 5만원 이상 구매시 무료배송입니다. (도서, 산간, 오지 등 일부
                지역은 배송비가 추가될 수 있습니다.)
            </Typography>
            <Typography variant="body2" color="#999">
                택배사 : 우체국 택배를 이용하고 있습니다.
            </Typography>
            <Typography variant="body2" color="#999">
                국내/해외 배송 모두 가능합니다.
            </Typography>

            <Typography className="pointFont" color="#777" alignSelf="flex-start" mt={6} mb={2}>
                # 교환/환불/AS 안내
            </Typography>
            <Typography variant="body2" color="#999">
                상품 수령일 7일 이내 반품/환불 가능합니다.
            </Typography>
            <Typography variant="body2" color="#999">
                고객변심으로 인한 반품은 왕복배송비를 포함한 반품 택배 비용이 부과됩니다.
            </Typography>
            <Typography variant="body2" color="#999">
                상품결함으로 인한 반품의 경우 심바트에서 배송비를 부담합니다.
            </Typography>
            <Typography variant="body2" color="#999">
                상품불량인 경우는 배송비를 포함한 전액을 환불해드립니다.
            </Typography>
            <Typography variant="body2" color="#999">
                샘플 또는 이벤트 상품이 있는 경우, 함께 반품해야 합니다.
            </Typography>
            <Typography variant="body2" color="#999">
                출고 이후 환불요청 시, 상품이 회수된 후 처리됩니다.
            </Typography>
        </Stack>
    )
}
