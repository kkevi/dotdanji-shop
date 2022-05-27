import React, {useState, useEffect} from "react"
import {
    Button,
    Stack,
    Typography,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Divider,
    useMediaQuery,
    useTheme,
} from "@mui/material"

import useStyles from "../styles"

import TermsDialog from "./TermsDialog"

type SignUpSection1Props = {
    setStep: (val: number) => void
}

export default function SignUpSection1(prop: SignUpSection1Props) {
    const {setStep} = prop
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    const [isAllChecked, setIsAllChecked] = useState(false)
    const [checkedItems, setCheckedItems] = useState<string[]>([])
    const [dialogId, setDialogId] = useState(0)
    const [visibleDialog, setVisibleDialog] = useState(false)

    const checkedLists = [
        {id: 0, value: "age", title: "[필수] 만 14세 이상", link: false},
        {id: 1, value: "terms", title: "[필수] 이용약관 동의", link: true},
        {id: 2, value: "privacy", title: "[필수] 개인정보 처리방침 동의", link: true},
        {id: 3, value: "marketing", title: "[선택] 광고성 정보 수신 및 마케팅 활용 동의", link: true},
    ]

    // 모두 체크할 경우
    const onCheckedAll = (checked: boolean) => {
        setIsAllChecked(!isAllChecked)
        if (checked) {
            setCheckedItems([...checkedItems, "age", "terms", "privacy", "marketing"])
        } else if (
            (!checked && checkedItems.includes("age")) ||
            (!checked && checkedItems.includes("terms")) ||
            (!checked && checkedItems.includes("privacy")) ||
            (!checked && checkedItems.includes("marketing"))
        ) {
            setCheckedItems([])
        }
    }

    // 개별 체크할 경우
    const onCheckedOne = (checked: boolean, value: any) => {
        if (checked) {
            setCheckedItems([...checkedItems, value])
        } else {
            setCheckedItems(checkedItems.filter(el => el !== value))
        }
    }

    // 하나라도 체크 해제할 경우 전체 동의 해제
    useEffect(() => {
        if (checkedItems.length >= 4) {
            setIsAllChecked(true)
        } else {
            setIsAllChecked(false)
        }
    }, [checkedItems])

    const avaliable1 = checkedItems.includes("age")
    const avaliable2 = checkedItems.includes("terms")
    const avaliable3 = checkedItems.includes("privacy")
    const avaliableAll = avaliable1 && avaliable2 && avaliable3

    return (
        <>
            {visibleDialog ? <TermsDialog id={dialogId} setVisibleDialog={setVisibleDialog} mobile={mobile} /> : null}

            <Stack width={"100%"} mt={4}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isAllChecked}
                            value={"agreeAll"}
                            onChange={e => onCheckedAll(e.currentTarget.checked)}
                        />
                    }
                    label={<Typography variant="subtitle2">모두 동의 (선택정보 포함)</Typography>}
                />
                <Divider sx={{margin: "8px 0"}} />
                <FormGroup>
                    {checkedLists.map((itm, index) => (
                        <Stack direction="row" alignItems="center" key={index}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={itm.value}
                                        checked={checkedItems.includes(itm.value) ? true : false}
                                        onChange={e => onCheckedOne(e.currentTarget.checked, e.target.value)}
                                    />
                                }
                                label={<Typography variant="subtitle2">{itm.title}</Typography>}
                            />
                            {itm.link ? (
                                <Typography
                                    variant="subtitle2"
                                    className={classes.link}
                                    ml={-1}
                                    onClick={() => {
                                        setDialogId(itm.id)
                                        setVisibleDialog(true)
                                    }}
                                >
                                    보기
                                </Typography>
                            ) : null}
                        </Stack>
                    ))}
                </FormGroup>
            </Stack>

            <Button
                disabled={!avaliableAll}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                onClick={() => {
                    if (avaliableAll) {
                        setStep(1)
                    } else return
                }}
            >
                동의하고 가입하기
            </Button>
        </>
    )
}
