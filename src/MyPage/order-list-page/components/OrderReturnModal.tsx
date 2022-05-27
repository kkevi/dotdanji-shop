import React, {useState} from "react"
import {
    Dialog,
    DialogContent,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
    TextField,
    Button,
    tableCellClasses,
} from "@mui/material"

import useStyles from "../style"
import ImageBox from "components/image-box/ImageBox"
import {categoryList, inquiryFormDefaultData} from "../order-list-item-type"

type OrderReturnModalTypes = {
    visibleModal: boolean
    setVisibleModal: (val: boolean) => void
}

export default function OrderReturnModal(props: OrderReturnModalTypes) {
    const theme = useTheme()
    const classes = useStyles()
    const {visibleModal, setVisibleModal} = props
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
                <Typography variant="h5" mt={2} mb={1} className="pointFont" color={theme.palette.secondary.dark}>
                    # 환불/반품 정보 입력
                </Typography>

                {/* 제품정보 */}
                <Table
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none",
                        },
                    }}
                >
                    <TableBody>
                        <TableRow key={"tableRow" + 0}>
                            <TableCell width="50%" align="center">
                                <Stack direction="row">
                                    {/* 상품 이미지 */}
                                    <ImageBox width={100} height={100} src={"/"} />

                                    <Stack ml={4} direction="column" alignItems="flex-start" justifyContent="center">
                                        {/* 상품명 */}
                                        <Typography fontSize={18} fontWeight={700} mb={1}>
                                            이름
                                        </Typography>

                                        {/* 옵션정보 */}
                                        <Stack direction="row" alignItems="center" justifyContent="center">
                                            <Typography color="#999" fontSize={14}>
                                                옵션정보
                                            </Typography>
                                            <Stack borderLeft="1px solid #ddd" height="100%" mx={1} />
                                            <Typography fontSize={14} mr={1}>
                                                옵션정보 + 10,000원
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </TableCell>

                            <TableCell align="center">
                                <Stack direction="column">
                                    <Typography fontSize={15} fontWeight={600} color="#333">
                                        300,000 원
                                    </Typography>
                                    <Typography fontSize={13} color="#777777">
                                        1 개
                                    </Typography>
                                </Stack>
                            </TableCell>

                            <TableCell align="center">
                                <Typography fontSize={15} fontWeight={600} color="#333">
                                    2021-04-14
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography fontSize={15} fontWeight={600} color="#333">
                                    20220414001001
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Stack mt={4} direction="row">
                    <Select
                        className={classes.autocomplete}
                        id="category"
                        required
                        value={category}
                        onChange={onSelectCategory}
                    >
                        <MenuItem disabled value="사유 선택">
                            <em>사유 선택</em>
                        </MenuItem>
                        {Object.values(categoryList).map((category, index) => (
                            <MenuItem
                                key={category}
                                value={category}
                                style={{display: "flex", justifyContent: "space-between"}}
                            >
                                <Typography fontSize={16}>{category}</Typography>
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField
                        className={classes.textField}
                        sx={{marginLeft: 2}}
                        fullWidth
                        required
                        label="제목"
                        name="title"
                        value={formData.title}
                        onChange={onChangeInput}
                    />
                </Stack>

                <TextField
                    className={classes.textField}
                    fullWidth
                    required
                    multiline
                    rows={12}
                    label="내용"
                    name="content"
                    value={formData.content}
                    onChange={onChangeInput}
                />

                <Button
                    className={classes.submitButton}
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
