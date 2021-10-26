import { CHANGE_CTA_VALUE } from "./actionType"

export const changeCTAInput = (key, value) => {
    return {
        type: CHANGE_CTA_VALUE,
        key: key,
        value: value
    }
}