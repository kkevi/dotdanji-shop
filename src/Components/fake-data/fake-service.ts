import {NoticeType, FaqDataType} from "types/service-type"

export const FAKE_NOTICE_DATA: NoticeType[] = [
    {
        noticeId: "fake_notice_0",
        title: "심키즈몰이 오픈했습니다!",
        content:
            "<p>안녕하세요. 어린이들을 위한 즐거운 한글 콘텐츠를 만드는 심키즈입니다.<br/> 좋은 상품과 서비스로 찾아뵙겠습니다.<br/> 많은 기대 부탁드립니다! 감사합니다.</p>",
        date: "2022-06-01",
    },
    {
        noticeId: "fake_notice_1",
        title: "똑똑하고 흥미로운 언어교육, 돛단지 출시!",
        content:
            "<p>안녕하세요 심키즈입니다.<br/> 똑똑하고 흥미로운 언어교육, 돛단지가 출시 출시되었습니다!<br/> 돛단지에 대한 자세한 사항은 상품 페이지를 확인해주세요. 감사합니다.</p>",
        date: "2022-06-01",
    },
]

export const FAKE_FAQ_DATA: FaqDataType[] = [
    {
        category: "info",
        title: "회원가입이 안되요.",
        content:
            "회원가입 시, 불편함이 있으셨나요? simkids@simbaat.com 이메일로 문제되는 화면 캡쳐와 내용을 보내주세요.",
    },
    {
        category: "pay",
        title: "현금영수증을 발행하고 싶습니다.",
        content:
            "현금영수증 발행은 [실시간 계좌이체] 또는 [가상계좌(무통장입급)]의 방법으로 상품 결제 시 현금영수증 발행 용도를 체크 후 주민번호 또는 휴대폰 번호를 입력해 주시면 발행이 가능합니다. 상품 결제 이후 발급 요청은 '국세청 홈페이지' 또는 'KCP 현금영수증'을 통해 발행 가능합니다.",
    },
    {
        category: "goods",
        title: "기기에 문제가 생겼습니다.",
        content:
            "해당 기기의 설명서를 참고해주세요. 설명서에 기재되어있는 문의 연락처로 연락 부탁드립니다. 소프트웨어에 문제가 있다면 simkids@simbaat.com 이메일로 문제되는 화면 캡쳐와 내용을 보내주세요.",
    },
    // {
    //     category: "book",
    //     title: "교재 답안이 궁금합니다.",
    //     content: "",
    // },
    {
        category: "order",
        title: "배송이 얼마나 걸리나요?",
        content:
            "온라인 상품은 주말,공휴일 제외하고 주문일로부터 3~7일이 소요됩니다. 배송 상품은 주말, 공휴일 제외하고 3~7일이 소요됩니다. 소요기간 이후에도 물건을 수령하지 못하신 경우, 주문에 문제가 생겼거나 배송사에 문제가 생겼을 수 있으니 문의를 통해 접수 부탁드립니다.",
    },
    {
        category: "etc",
        title: "faq에서 궁금한 점을 찾을 수 없어요.",
        content: "기타 문의는 상세한 문의 내용과 함께 1:1 문의 페이지에서 접수 부탁드립니다.",
    },
]
