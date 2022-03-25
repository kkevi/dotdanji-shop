import {GoodsItemProps, GoodsCategoryProps} from "Goods/goods-type"

export const GOODS_ITEMS_DATA: GoodsItemProps[] = new Array(10).fill({
    goodsId: "fake-data",
    categoryId: "ebook",
    thumnails: {
        images: ["/images/demo.jpg", "/images/fake/little-prince.png", "/images/fake/pinokio.png"],
        bgColor: "#FFD059",
    },
    options: [
        {optionId: "opt0", text: "교재 세트", value: 5000},
        {optionId: "opt1", text: "교재 7권 + e-book 세트", value: 10000},
        {optionId: "opt2", text: "교재 10권 + e-book 세트", value: 20000},
    ],
    name: "스토리셀프 교재 세트",
    infoText:
        "Our fast-acting sublinguals calm your mind and body so healthy sleep comes quickly, without any intoxicating effects. Fall asleep faster, naturally.",
    price: 10000,
    sale: 10,
    isFavor: false,
})

export const GOODS_CATEGORY_DATA: GoodsCategoryProps[] = [
    {categoryId: "ebook", title: "E-BOOK"},
    {categoryId: "textbook", title: "교재"},
    {categoryId: "maketool", title: "교구"},
]
