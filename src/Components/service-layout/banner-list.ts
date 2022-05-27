import {theme} from "src/styles/theme"
import {ServiceBannerType, ServiceTabKey} from "types/service-type"

export const bannerList: ServiceBannerType[] = [
    {
        tabId: "notice",
        phrase: "심키즈의 새로운 소식입니다.",
        title: "공지사항",
        color: "#95D6EE",
        image: "",
    },
    {
        tabId: "faq",
        phrase: "무엇을 도와드릴까요?",
        title: "FAQ",
        color: theme.palette.primary.main,
        image: "",
    },
    {
        tabId: "event",
        phrase: "함께 즐길 수 있는 새 이벤트!",
        title: "이벤트",
        color: theme.palette.secondary.main,
        image: "",
    },
    {
        tabId: "inquiry",
        phrase: "소중한 문의에 답변드립니다.",
        title: "1:1 문의",
        color: theme.palette.primary.dark,
        image: "",
    },
]

export const serviceTabList: Record<ServiceTabKey, string> = {
    notice: "공지사항",
    faq: "FAQ",
    event: "이벤트",
    inquiry: "1:1 문의",
}
