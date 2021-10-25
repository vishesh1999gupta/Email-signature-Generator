import { CHANGE_MAIN_VALUE } from "../actions/actionType"

const initialState = {
    form: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        jobTitle: "",
        department: "",
        companyName: "",
        website: "",
        officePhone: "",
        officeFax: "",
        address: "",
        addressLine2: "",
        image: null
    }
}



const mainReducer = (prevState = initialState, action) => {
    
    switch(action.type){
        case CHANGE_MAIN_VALUE: 
            let stringifiedPrevState = JSON.stringify(prevState)
            let newState = JSON.parse(stringifiedPrevState)
            newState["form"][action.key] = action.value
            return {
                ...newState
            }

        default: return prevState
    }
}

export default mainReducer;