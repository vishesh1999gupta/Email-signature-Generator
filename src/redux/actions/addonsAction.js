import { CHANGE_ADDONS_VALUE } from "./actionType"

export const changeADDONSInput = (key, value) => {
    return {
        type: CHANGE_ADDONS_VALUE,
        key: key,
        value: value
    }
}