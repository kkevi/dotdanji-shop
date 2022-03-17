export const sliderSettings = {
    dots: false, // 아래 dots 여부
    dotsClass: "slick-dots", //아래 dots의 css class 지정
    arrows: false, // 좌우 화살표 여부
    infinite: true, // 마지막 슬라이드에서 처음 슬라이스로 이동 여부
    speed: 2000, //슬라이드 넘어감 스피드
    slidesToShow: 1, //한 번에 보여줄 콘텐츠 개수 (대개 1을 사용함)
    slidesToScroll: 1, // 스크롤 할때 넘어갈 장수 (대개 1을 사용함)
    autoplay: true, // 자동 넘김 여부
    autoplaySpeed: 4000, // 자동 넘김 시, 속도 지정
    pauseOnHover: true, // 마우스 올리면 슬라이더가 자동으로 넘어가지 않게
    draggable: true, //드래그 가능 여부
    vertical: false, // 세로 방향 슬라이드 옵션
    responsive: [
        // 반응형 웹 구현 옵션
        {
            breakpoint: 960, //화면 사이즈 960px
            settings: {
                //화면사이즈에 맞춰 옵션변경
                slidesToShow: 3,
            },
        },
        //…추가가능
    ],
    style: {
        outerWidth: 100,
        width: "100%",
        height: "100%",
    },
}
