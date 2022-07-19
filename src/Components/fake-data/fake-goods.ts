import {GoodsItemType, GoodsCategoryType} from "types/goods-type"

export const GOODS_CATEGORY_DATA: GoodsCategoryType[] = [
    {categoryId: "dotdanji", title: "돛단지"},
    {categoryId: "textbook", title: "교재"},
    {categoryId: "goods", title: "굿즈"},
]

export const GOODS_ITEMS_DATA: GoodsItemType[] = [
    {
        goodsId: "fake-goodsId-0",
        categoryId: "ebook",
        thumbnails: JSON.stringify({
            images: ["/images/fake/storyself.png", "https://storyself.com/resources/images/main_platformpic.jpg"],
            bgColor: "#91C3CE",
        }),
        options: JSON.stringify([
            {optionId: "fake-goodsId-0_opt0", name: "돛단지 구독권", addPlace: 0},
            {optionId: "fake-goodsId-0_opt1", name: "돛단지 구독권 2장", addPlace: 85000},
        ]),
        name: "돛단지 구독권",
        tags: "['15~9세용', '스마트폰', '타블렛PC 지원']",
        infoText:
            "온가족이 동화 속 주인공이 되어 이야기를 주도적으로 이끌어가며 다양한 읽기교육을 제공하는 인터랙티브 실감 동화교육 서비스입니다.",
        infoHtml: `<div>
                    <div style="background:#f7f6f1; padding:80px 0">
                    <img src="https://storyself.com/resources/images/storyself_img1.png" alt=""/>
                    <h1>누구나 꿈꿔본 동화 속 주인공의 꿈</h1>
                    <h1>아동교육의 시작, 동화</h1>
                    <h1>아이들은 이야기를 접하면서 자라납니다.</h1>
                    <p>돛단지는 그 이야기에 참여하고, 녹아들며, 함께 노는 방법으로 아이들에게 이야기를 전달해 줍니다.</br>
                    돛단지로 아이와 함께 노는 동화교육을 시작해보세요.</p>
                    </div>
                    <div style="background:#f9f9f9; padding:80px 0">
                    <img src="https://storyself.com/resources/images/storyself_img2.png" alt=""/>
                    <h1>돛단지만의</h1>
                    <h1>인터랙티브 실감 스토리 콘텐츠</h1>
                    <p>돛단지만의 생동감있게 표현되는 나만의 캐릭터와 함께 양질의 동화세계로 떠나보세요.</br>
                    우리가족 첫번째 메타버스 동화세계 경험, 돛단지로 시작해요.</p>
                    </div>
                    <div style="background:#f1f9fe; padding:80px 0">
                    <h1>이러한 분들에게 필요해요</h1>
                    <p>아이, 부모님 뿐만 아니라 선생님께도 돛단지가 필요합니다.</p>
                    <img src="https://storyself.com/resources/images/storyself_needimg1.png" alt=""/>
                    <p>단순한 시청각 자료를 넘어서 보다 재미있고 활동적인 콘텐츠를 좋아하는 상상력 넘치는 아이들이 좋아해요.</p>
                    <img src="https://storyself.com/resources/images/storyself_needimg2.png" alt=""/>
                    <p>자녀의 뇌발달, 독서교육, 창의력 등을 고려하는 것뿐 아니라 직장과 가사일로 바쁜 부모님들에게 추천해요.</p>
                    <img src="https://storyself.com/resources/images/storyself_needimg3.png" alt=""/>
                    <p>코로나로 인한 원격교육을 필요로 하고 보다 질높은 콘텐츠를 선호하는 교육기관에서 사용해요.</p>
                    </div>
                    </div>
                    `,
        price: 99000,
        sale: 10,
    },
]
