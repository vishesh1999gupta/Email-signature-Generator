import { CHANGE_MAIN_VALUE } from "./actionType"

export const changeMainInput = (key, value) => {
    return {
        type: CHANGE_MAIN_VALUE,
        key: key,
        value: value
    }
} 