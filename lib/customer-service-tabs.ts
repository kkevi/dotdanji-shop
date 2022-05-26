export type CustomerServiceTabs = "notice" | "faq" | "event" | "inquiry"

export const customerServiceTabs: Record<CustomerServiceTabs, string> = {
    notice: "공지사항",
    faq: "FAQ",
    event: "이벤트",
    inquiry: "1:1 문의",
}
