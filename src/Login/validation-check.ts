import {toast} from "react-toastify"

const emailRegex = /^[a-z0-9_+.-]+@([a-z0-9-]+.)+[a-z0-9]{2,4}$/
const pwRegex = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/

export const userEmailCheck = (emailInput: string) => {
    //이메일 검사
    if (emailInput === "") {
        toast.error("이메일을 입력해주세요.")
        return false
    } else if (!emailRegex.test(emailInput)) {
        toast.error("이메일 형식이 맞지않습니다.")
        return false
    } else return true
}

export const userPasswordCheck = (passwordInput: string) => {
    //비밀번호 검사
    //
    if (passwordInput === "") {
        toast.error("비밀번호를 입력해주세요.")
        return false
    } else if (!pwRegex.test(passwordInput)) {
        toast.error("최소 1개의 숫자 혹은 특수 문자를 포함해야 함(8~20자)")
        return false
    } else return true
}
