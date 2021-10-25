import { CHANGE_STYLE_VALUE } from "./actionType"

export const changeStyleInput = (key, value) => {
    return {
        type: CHANGE_STYLE_VALUE,
        key: key,
        value: value
    }
} 