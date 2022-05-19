import React, {useState, useRef} from "react"
import {Stack, Typography, TextField, Button, Select, MenuItem, SelectChangeEvent, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

import useStyles from "./styles"
import {InquiryFormProps, categoryList, inquiryFormDefaultData} from "types/service-type"
import InquiryTerms from "./inquiry-terms/InquiryTerms"
import {toast} from "react-toastify"

export default function Index() {
    const theme = useTheme()
    const classes = useStyles()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [formData, setFormData] = useState<InquiryFormProps>(inquiryFormDefaultData)
    const imageFileInputRef = useRef<HTMLInputElement>(null)
    const [category, setCategory] = useState<string>(categoryList.info)

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files
        const maxSize = 5 * 1024 * 1024 // 5MB
        let reader = new FileReader()
        if (!files || files.length === 0 || files[0].size === 0) return
        else if (files[0]?.size > maxSize) {
            return toast.error("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.")
        } else {
            reader.readAsDataURL(files[0])
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    imageFile: {
                        fileSize: files[0].size,
                        fileName: files[0].name,
                        downloadUrl: reader.result,
                    },
                })
            }
        }
    }

    const onSelectCategory = (event: SelectChangeEvent) => {
        const {value} = event.target
        setCategory(value)
    }

    const onClickSubmit = () => {
        alert("죄송합니다. 현재 서비스를 이용하실 수 없습니다.")
    }

    return (
        <Stack mt={mobile ? 0 : 2} flexDirection="column" justifyContent="center" alignItems="center">
            <Stack width={mobile ? "90%" : 700}>
                <Typography
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                    mb={mobile ? 2 : 4}
                    fontSize={mobile ? 18 : 22}
                    sx={{alignSelf: "flex-start"}}
                >
                    # 고객정보
                </Typography>

                <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    label="이름"
                    name="name"
                    value={formData.name}
                    onChange={onChangeInput}
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                    InputLabelProps={{
                        style: {fontSize: mobile ? 14 : 16},
                    }}
                />
                <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    type="email"
                    label="메일주소"
                    name="email"
                    value={formData.email}
                    onChange={onChangeInput}
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                    InputLabelProps={{
                        style: {fontSize: mobile ? 14 : 16},
                    }}
                />
                <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    type="number"
                    label="전화번호"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={onChangeInput}
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                    InputLabelProps={{
                        style: {fontSize: mobile ? 14 : 16},
                    }}
                />

                <Typography
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                    mt={2}
                    mb={mobile ? 2 : 4}
                    fontSize={mobile ? 18 : 22}
                    sx={{alignSelf: "flex-start"}}
                >
                    # 문의내역
                </Typography>
                <Select
                    className={classes.autocomplete}
                    fullWidth
                    id="category"
                    value={category}
                    onChange={onSelectCategory}
                    sx={{marginBottom: 3}}
                >
                    {Object.values(categoryList).map((category, idx) => (
                        <MenuItem
                            key={category}
                            value={category}
                            style={{display: "flex", justifyContent: "space-between"}}
                        >
                            <Typography fontSize={mobile ? 14 : 16}>{category}</Typography>
                        </MenuItem>
                    ))}
                </Select>
                <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    type="title"
                    label="제목"
                    name="title"
                    value={formData.title}
                    onChange={onChangeInput}
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                    InputLabelProps={{
                        style: {fontSize: mobile ? 14 : 16},
                    }}
                />
                <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    type="content"
                    label="내용"
                    name="content"
                    multiline
                    rows={10}
                    value={formData.content}
                    onChange={onChangeInput}
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                    InputLabelProps={{
                        style: {fontSize: mobile ? 14 : 16},
                    }}
                />
                <Stack flexDirection="row">
                    <TextField
                        className={classes.lastTextField}
                        disabled
                        fullWidth
                        defaultValue={"회사 소개서 첨부"}
                        value={formData.imageFile?.fileName}
                    />
                    <Button
                        className={classes.button2}
                        variant="outlined"
                        onClick={() => imageFileInputRef.current && imageFileInputRef.current.click()}
                    >
                        첨 부
                    </Button>
                    <input
                        ref={imageFileInputRef}
                        type="file"
                        name="featuredImg"
                        style={{display: "none"}}
                        accept="image/jpg, image/png"
                        multiple={false}
                        onChange={onChangeFile}
                    />
                </Stack>
                <Typography variant="caption" mt={1} ml={1}>
                    파일은 5MB까지 첨부가능합니다. (PNG, JPG)
                </Typography>
                <Typography variant="caption" ml={1}></Typography>

                <Typography
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                    mt={8}
                    mb={mobile ? 2 : 4}
                    fontSize={mobile ? 18 : 22}
                    sx={{alignSelf: "flex-start"}}
                >
                    # 개인정보 수집 및 이용 동의
                </Typography>
                <InquiryTerms formData={formData} setFormData={setFormData} mobile={mobile} />

                <Typography mt={2} mb={6} fontSize={mobile ? 12 : 14} color="#757575">
                    ❗️ 등록 전 개인정보와 문의 내용을 다시 한 번 확인 해주세요. 개인정보가 정확하지 않으면 답변이
                    어려울 수 있습니다.
                </Typography>
            </Stack>

            <Button className={classes.button} sx={{alignSelf: "center"}} variant="outlined" onClick={onClickSubmit}>
                문의 보내기
            </Button>
        </Stack>
    )
}
