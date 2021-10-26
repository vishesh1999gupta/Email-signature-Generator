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
            // console.log(prevState)
            let stringifiedPrevState = JSON.stringify(prevState)
            let newState = JSON.parse(stringifiedPrevState)

            if(action.key === "image"){
                newState["form"][action.key] = URL.createObjectURL(action.value);
            }
            else newState["form"][action.key] = action.value
            return {
                ...newState
            }

        default: return prevState
    }
}

export default mainReducer;