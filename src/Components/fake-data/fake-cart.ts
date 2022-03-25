import {CartItemProps} from "Cart/cart-type"

export const CART_ITEMS_DATA: CartItemProps[] = [
    {
        goodsId: "goodsId0",
        name: "스토리셀프 교재 세트",
        thumbnail: "/images/fake/little-prince.png",
        options: [
            {
                count: 1,
                price: 10000,
                option: {
                    optionId: "opt0",
                    text: "교재세트 7권 + 스티커북 10매",
                    value: 10000,
                },
            },
            {
                count: 3,
                price: 30000,
                option: {
                    optionId: "opt1",
                    text: "교재세트 + 스티커북 10매",
                    value: 10000,
                },
            },
        ],
    },
    {
        goodsId: "goodsId1",
        name: "스토리셀프 스티커북",
        thumbnail: "/images/fake/little-prince.png",
        options: [
            {
                count: 5,
                price: 25000,
                option: {
                    optionId: "opt0",
                    text: "스티커북 10매",
                    value: 5000,
                },
            },
        ],
    },
    {
        goodsId: "goodsId2",
        name: "스토리셀프 밍밍밍",
        thumbnail: "/images/fake/little-prince.png",
        options: [
            {
                count: 1,
                price: 15000,
                option: {
                    optionId: "opt0",
                    text: "밍밍이 키링",
                    value: 15000,
                },
            },
            {
                count: 1,
                price: 30000,
                option: {
                    optionId: "opt0",
                    text: "밍밍이 인형",
                    value: 30000,
                },
            },
        ],
    },
]
