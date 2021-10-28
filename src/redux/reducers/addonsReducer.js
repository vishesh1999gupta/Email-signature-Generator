import { CHANGE_ADDONS_VALUE } from "../actions/actionType";


const initialState = {
    form: {
        type: "",
        data: {
            confidentiality: {
                editable: false,
                content: "IMPORTANT: The contents of this email and any attachments are confidential. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future."
            },
            environmental: {
                editable: false,
                content: "Please do not print this email unless it is necessary. Every unprinted email helps the environment."
            },
            custom: {
                editable: true,
                content: ""
            }
        },
        fontSize: 14,
        width: 500,
        selected: "confidentiality",
        amazonBadge: "",
        appleBadge: "",
        ebayBadge: "",
        googleBusinessBadge: "",
        googlePlayBadge: "",
        badgeHeight: 50,
        badgePaddingTop: 15
    }
}

const addonsReducer = (prevState = initialState, action) => {
    switch(action.type){
        case CHANGE_ADDONS_VALUE:
            let stringifiedPrevState = JSON.stringify(prevState);
            let newState = JSON.parse(stringifiedPrevState);

            if(action.key === "custom"){
                newState["form"]["data"]["custom"]["content"] = action.value
                newState["form"]["selected"] = "custom"
            }
            else if(action.key === "reset"){
                newState = initialState
            }
            else if(action.key === "selected"){
                if(action.value !== "custom" && newState["form"]["selected"] === "custom")
                    newState["form"]["data"]["custom"]["content"] = ""

                newState["form"]["selected"] = action.value
            }
            else newState["form"][action.key] = action.value;
            return {
                ...newState
            }
        
        default: return prevState
    }
}

export default addonsReducer