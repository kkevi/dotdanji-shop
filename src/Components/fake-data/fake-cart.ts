import {CartItemProps} from "Cart/cart-type"

export const CART_ITEMS_DATA: CartItemProps[] = [
    {
        goodsId: "fake-goodsId-0",
        options: [
            {
                count: 1,
                price: 10500,
                option: {
                    optionId: "fake-goodsId-0_opt0",
                    text: "교재세트 7권 + 스티커북 10매",
                    value: 5000,
                },
            },
            {
                count: 3,
                price: 30000,
                option: {
                    optionId: "fake-goodsId-0_opt1",
                    text: "교재세트 + 스티커북 10매",
                    value: 10000,
                },
            },
        ],
    },
    {
        goodsId: "fake-goodsId-1",
        options: [
            {
                count: 5,
                price: 25000,
                option: {
                    optionId: "fake-goodsId-1_opt0",
                    text: "스티커북 10매",
                    value: 5000,
                },
            },
        ],
    },
    {
        goodsId: "fake-goodsId-2",
        options: [
            {
                count: 1,
                price: 15000,
                option: {
                    optionId: "fake-goodsId-2_opt0",
                    text: "밍밍이 키링",
                    value: 15000,
                },
            },
            {
                count: 1,
                price: 30000,
                option: {
                    optionId: "fake-goodsId-2_opt1",
                    text: "밍밍이 인형",
                    value: 30000,
                },
            },
        ],
    },
]
