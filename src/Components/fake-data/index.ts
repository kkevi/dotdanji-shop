import {GoodsItemProps, GoodsCategoryProps} from "Goods/GoodsType"

export const GOODS_ITEMS_DATA: GoodsItemProps[] = new Array(10).fill({
    goodsId: "fake-data",
    categoryId: "ebook",
    imgUrl: "/images/demo.jpg",
    name: "스토리셀프 교재 세트",
    price: 10000,
    sale: 10,
    isFavor: false,
})

export const GOODS_CATEGORY_DATA: GoodsCategoryProps[] = [
    {categoryId: "ebook", title: "E-BOOK"},
    {categoryId: "textbook", title: "교재"},
    {categoryId: "maketool", title: "교구"},
]
