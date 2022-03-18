import {useEffect, useState} from "react"
import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Typography,
} from "@mui/material"
//components
import {GOODS_ITEMS_DATA} from "Components/fake-data"
import {GoodsItemProps, Options} from "Goods/goods-type"
import ImageBox from "Components/image-box/ImageBox"
import useStyles from "./style"
//slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//icon
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"

type Props = {
    goodsId: string | string[] | undefined
}

type OptionCart = {
    option: Options
    count: number
}

export default function GoodsDetailPage(props: Props) {
    const classes = useStyles()
    const {goodsId} = props
    const [goodsItemData, setGoodsItemData] = useState<GoodsItemProps>(GOODS_ITEMS_DATA[0])
    const {name, thumnails, infoText, options = [], price} = goodsItemData

    //옵션 선택 박스
    const defaultOption = "옵션 선택"
    const [selectValue, setSelectValue] = useState(defaultOption)
    const [selectValueList, setSelectValueList] = useState<OptionCart[]>([])
    const onSelectOption = (event: SelectChangeEvent) => {
        const {value} = event.target
        setSelectValue(value)
        if (value === defaultOption) return
        onAddOptionList(value)
    }

    //옵션 배열 검사
    const onAddOptionList = (id: string) => {
        const search = selectValueList.findIndex(it => it.option.optionId === id)
        if (search === -1) {
            const arr = options
            const newItm = arr.filter(it => it.optionId === id)[0]
            selectValueList.push({option: newItm, count: 1})
        } else {
        }
    }

    //옵션 배열 삭제
    const onDeleteOption = (optionId: string) => {
        setSelectValueList(prev => prev.filter(it => it.option.optionId !== optionId))
    }

    return (
        <div className={classes.root}>
            <Stack direction="row" width="100%" bgcolor={thumnails.bgColor}>
                {/* left box */}
                <div style={{width: "60%", paddingTop: "2rem"}}>
                    <Slider {...sliderSettings}>
                        {thumnails.images.map((image, idx) => (
                            <Stack
                                mt={10}
                                key={"thumnail" + idx}
                                width="100%"
                                className={classes.slideBox}
                                height={1000}
                                justifyContent="center"
                                alignItems="center"
                                display="flex !important"
                            >
                                <ImageBox
                                    src={image}
                                    height={700}
                                    width={500}
                                    style={{boxShadow: "0px 58px 49px -40px #00000030"}}
                                />
                            </Stack>
                        ))}
                    </Slider>
                </div>

                {/* right box */}
                <div className={classes.infoBox}>
                    <Typography variant="h4" fontWeight={800}>
                        {name}
                    </Typography>
                    <Typography variant="h5" mt={3} mb={10}>
                        {infoText}
                    </Typography>

                    {/* option select box */}
                    {options && (
                        <Select
                            value={selectValue}
                            label={defaultOption}
                            variant="standard"
                            onChange={onSelectOption}
                            fullWidth
                        >
                            <MenuItem value={defaultOption} sx={{opacity: 0.6}}>
                                <Typography variant="h6">{defaultOption}</Typography>
                            </MenuItem>
                            {options.map((option, idx) => (
                                <MenuItem key={option.optionId} value={option.optionId}>
                                    <Typography variant="h6">{option.text}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    )}

                    {/* option list */}
                    {selectValueList.length > 0 && (
                        <Stack my={3} width="100%">
                            {selectValueList.map(({option, count}, idx) => (
                                <Stack
                                    key={option.optionId}
                                    bgcolor="rgba(255,255,255,0.7)"
                                    my={0.5}
                                    width="100%"
                                    p={2}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography>{option.text}</Typography>
                                    <Typography>{count}</Typography>
                                    <div>
                                        <IconButton onClick={() => onDeleteOption(option.optionId)}>
                                            <ClearRoundedIcon />
                                        </IconButton>
                                    </div>
                                </Stack>
                            ))}
                        </Stack>
                    )}

                    <ButtonGroup disableElevation variant="contained" size="large" fullWidth>
                        <Button>
                            <Typography variant="h6">장바구니 담기</Typography>
                        </Button>
                        <Button>
                            <Typography variant="h6">바로 구매하기</Typography>
                        </Button>
                    </ButtonGroup>
                </div>
            </Stack>

            {/* <Container maxWidth="lg">
                <Stack py={40}>
                    <Container maxWidth="lg" sx={{my: 24}}></Container>
                </Stack>
            </Container> */}
        </div>
    )
}

const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots",
    arrows: false,
    infinite: true,
    speed: 1000,
    draggable: true,
    vertical: false,
}
