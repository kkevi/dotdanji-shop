import React, {useState} from "react"
import {
    Dialog,
    DialogContent,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Typography,
    Button,
    IconButton,
} from "@mui/material"

import useStyles from "../style"
import ImageBox from "components/image-box/ImageBox"
import {categoryList, inquiryFormDefaultData} from "../order-list-item-type"

import {CustomedTextField} from "components/customed-textfield/CustomedTextField"

import CloseIcon from "@mui/icons-material/Close"

type OrderReturnModalTypes = {
    visibleModal: boolean
    setVisibleModal: (val: boolean) => void
}

export default function OrderReturnModal(props: OrderReturnModalTypes) {
    const {visibleModal, setVisibleModal} = props
    const theme = useTheme()
    const classes = useStyles()
    const [category, setCategory] = useState<string>("사유 선택")
    const [formData, setFormData] = useState(inquiryFormDefaultData)

    const onClose = () => {
        setVisibleModal(false)
    }

    const onSelectCategory = (event: SelectChangeEvent) => {
        const {value} = event.target
        setCategory(value)
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <Dialog
            fullScreen
            open={visibleModal}
            onClose={onClose}
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "850px",
                    },
                },
            }}
        >
            <DialogContent sx={{display: "flex", flexDirection: "column"}}>
                <Stack direction="row" mt={2} mb={1} justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" className="pointFont" color={theme.palette.secondary.dark}>
                        # 환불/반품 정보 입력
                    </Typography>

                    <IconButton onClick={onClose} sx={{color: "#757575"}}>
                        <CloseIcon />
                    </IconButton>
                </Stack>

                {/* 제품정보 */}

                <Stack direction={"row"} py={2}>
                    {/* 상품 이미지 */}
                    <ImageBox width={100} height={100} src={"/"} />

                    <Stack ml={1} direction="column" alignItems="flex-start" justifyContent="flex-start">
                        <Typography fontSize={12} fontWeight={600} color="#333" mr={0.5}>
                            2021-04-14 결제
                        </Typography>
                        <Typography fontSize={12} fontWeight={600} color="#333">
                            20220414001001
                        </Typography>

                        {/* 상품명 */}
                        <Typography fontWeight={700} mt={1} mb={0.2} mr={1}>
                            이름
                        </Typography>

                        {/* 옵션정보 */}
                        <Stack direction="row" alignItems="center">
                            <Typography color="#999" fontSize={12} mr={0.5} sx={{color: "#999"}}>
                                옵션정보 :
                            </Typography>
                            <Typography fontSize={10} mr={1}>
                                옵션정보
                            </Typography>
                            {/* {cartItem.optionValue > 0 && (
                                  <Typography fontSize={14} color="#999">
                                      +{cartItem.optionValue.toLocaleString("ko")}원
                                  </Typography>
                              )} */}
                        </Stack>

                        <Stack direction="row" alignItems="center">
                            <Typography fontSize={12} color="#333" mr={1}>
                                1개
                            </Typography>
                            <Typography fontSize={12} fontWeight={600} color="#333">
                                300,000 원
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Select
                    className={classes.autocompleteMobile}
                    id="category"
                    fullWidth
                    required
                    value={category}
                    onChange={onSelectCategory}
                >
                    <MenuItem disabled value="사유 선택">
                        <em style={{fontSize: 14}}>사유 선택</em>
                    </MenuItem>
                    {Object.values(categoryList).map((category, idx) => (
                        <MenuItem
                            key={category}
                            value={category}
                            style={{display: "flex", justifyContent: "space-between"}}
                        >
                            <Typography fontSize={14}>{category}</Typography>
                        </MenuItem>
                    ))}
                </Select>

                <CustomedTextField required label="제목" name="title" value={formData.title} onChange={onChangeInput} />

                <CustomedTextField
                    required
                    multiline
                    rows={12}
                    label="내용"
                    name="content"
                    value={formData.content}
                    onChange={onChangeInput}
                />

                <Button
                    className={classes.submitButton2}
                    sx={{alignSelf: "center", marginBottom: 2}}
                    variant="outlined"
                    onClick={() => {}}
                >
                    요청하기
                </Button>
            </DialogContent>
        </Dialog>
    )
}
