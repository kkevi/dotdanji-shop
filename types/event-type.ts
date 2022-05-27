export type MainSlideType = {
    slideId: string
    title: string
    subTitle: string
    image: string
    url: string
}

/*
 * 이벤트
 *
 */

export type EventType = {
    eventId: string
    title: string
    thumbnail: string
    homeImageUrl: string
    homeCaption: string
    content: string
    startDate: string
    endDate: string
}

export const eventDefaultData: EventType = {
    eventId: "",
    title: "",
    thumbnail: "",
    homeImageUrl: "",
    homeCaption: "",
    content: "",
    startDate: "",
    endDate: "",
}
