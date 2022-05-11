import {GoodsItemProps, GoodsCategoryProps} from "src/Goods/goods-type"

export const GOODS_CATEGORY_DATA: GoodsCategoryProps[] = [
    {categoryId: "ebook", title: "E-BOOK"},
    {categoryId: "textbook", title: "교재"},
    {categoryId: "maketool", title: "교구"},
]

export const GOODS_ITEMS_DATA: GoodsItemProps[] = [
    {
        goodsId: "fake-goodsId-0",
        categoryId: "ebook",
        thumbnails: {
            images: ["/images/fake/storyself.png", "/images/fake/little-prince.png", "/images/fake/pinokio.png"],
            bgColor: "#91C3CE",
        },
        options: [
            {optionId: "fake-goodsId-0_opt0", name: "스토리셀프 구독권", addPlace: 0},
            {optionId: "fake-goodsId-0_opt2", name: "구독권 + 교재 3권", addPlace: 20000},
            {optionId: "fake-goodsId-0_opt1", name: "구독권 2장", addPlace: 85000},
        ],
        name: "스토리셀프 구독권",
        tags: ["5~9세용", "스마트폰", "타블렛PC 지원"],
        infoText:
            "온가족이 동화 속 주인공이 되어 이야기를 주도적으로 이끌어가며 다양한 읽기교육을 제공하는 인터랙티브 실감 동화교육 서비스입니다.",
        infoHtml: "",
        price: 99000,
        sale: 10,
        isFavor: false,
        isCart: false,
    },
]
