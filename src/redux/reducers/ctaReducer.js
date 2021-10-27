import { CHANGE_CTA_VALUE } from "../actions/actionType"

const initialState = {
    form: {
        imageView: false,
        link: "",
        text: "",
        textColor: "#FFFFFF",
        backgroundColor: "#0385DB",
        textStyle: "Arial",
        textSize: 14,
        altText: "",
        image: null
    }
}

const ctaReducer = (prevState = initialState, action) => {
    switch(action.type){
        case CHANGE_CTA_VALUE:
            let stringifiedPrevState = JSON.stringify(prevState);
            let newState = JSON.parse(stringifiedPrevState);
            if(action.key === "imageView"){
                newState["form"][action.key] = action.value;
                if(action.value === false)
                newState["form"]["image"] = null
            }
            else if(action.key === "reset"){
                newState = initialState
            }
            else newState["form"][action.key] = action.value;
            return {
                ...newState
            }
        
        default: return prevState
    }
}

export default ctaReducer