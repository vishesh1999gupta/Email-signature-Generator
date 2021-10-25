import { CHANGE_STYLE_VALUE } from "../actions/actionType"

const initialState = {
    form: {
        textColor: "#333333",
        featureColor: "#DD2022",
        linkColor: "#1DA1DB",
        fontStyle: "Arial",
        fontSize: 14,
        avatarSize: 100,
        avatarRadius: "0%",
        ctaImageSize: 100,
        ctaImageRadius: "Square",
        iconSize: 20,
    }
}



const styleReducer = (prevState = initialState, action) => {
    
    switch(action.type){
        case CHANGE_STYLE_VALUE: 
            // console.log(action)
            let stringifiedPrevState = JSON.stringify(prevState)
            let newState = JSON.parse(stringifiedPrevState)
            newState["form"][action.key] = action.value
            return {
                ...newState
            }

        default: return prevState
    }
}

export default styleReducer;