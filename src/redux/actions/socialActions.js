import { ADD_SOCIAL, REMOVE_SOCIAL, UPDATE_SOCIAL } from "./actionType";

export const addSocial = (socialID) => {
    return {
        type: ADD_SOCIAL,
        socialID: socialID
    }
}

export const removeSocial = (socialID) => {
    return {
        type: REMOVE_SOCIAL,
        socialID: socialID
    }
}

export const updateSocial = (socialID, value) => {
    return {
        type: UPDATE_SOCIAL,
        socialID: socialID,
        value: value
    }
}
