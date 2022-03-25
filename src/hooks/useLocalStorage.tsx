// 추후 사용하지 않는다면 삭제 요망
import React, {useState} from "react"

type props = {
    keyName: string
    defaultValue: any[]
}

export const useLocalStorage = ({keyName, defaultValue}: props) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(keyName)

            if (value) {
                return JSON.parse(value)
            } else {
                localStorage.setItem(keyName, JSON.stringify(defaultValue))
                return defaultValue
            }
        } catch (err) {
            return defaultValue
        }
    })

    const setValue = (newValue: JSON) => {
        try {
            localStorage.setItem(keyName, JSON.stringify(newValue))
        } catch (err) {}
        setStoredValue(newValue)
    }

    return [storedValue, setValue]
}
