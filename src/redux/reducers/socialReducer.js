import { ADD_SOCIAL, REMOVE_SOCIAL, UPDATE_SOCIAL } from "../actions/actionType"

const initialState = {
    selected: [
        {
            socialID: "Facebook",
            website: "https://www.facebook.com",
            value: ""
        },
        {
            socialID: "Twitter",
            website: "https://www.twitter.com",
            value: ""
        },
        {
            socialID: "LinkedIn",
            website: "https://www.linkedin.com",
            value: ""
        }
    ],
    otherSocials: [
        {
            socialID: "Instagram",
            website: "https://www.instagram.com"
        },
        {
            socialID: "Pinterest",
            website: "https://www.pinterest.com"
        },
        {
            socialID: "Youtube",
            website: "https://www.youtube.com"
        },
        {
            socialID: "Tumblr",
            website: "https://www.tumblr.com"
        },
        {
            socialID: "Github",
            website: "https://www.github.com"
        },
        {
            socialID: "Snapchat",
            website: "https://www.snapchat.com"
        },
        {
            socialID: "StackOverFlow",
            website: "https://www.stackoverflow.com"
        },
        {
            socialID: "Reddit",
            website: "https://www.reddit.com"
        },
        {
            socialID: "Telegram",
            website: "https://www.telegram.com"
        },
        {
            socialID: "Whatsapp",
            website: "https://www.whatsapp.com"
        },
        {
            socialID: "Medium",
            website: "https://www.medium.com"
        }
    ]
}

const socialReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case ADD_SOCIAL:
            let newOtherSocials = []
            let selectedSocial = null
            prevState.otherSocials.forEach((social) => {
                if(social.socialID !== action.socialID)
                    newOtherSocials.push(social)
                else selectedSocial = social
            })

            let newSocial = prevState.selected
            newSocial.push({
                socialID: action.socialID,
                website: selectedSocial.website,
                value: ''
            })

            
            return {
                ...prevState,
                selected: newSocial,
                otherSocials: newOtherSocials
            }

        case REMOVE_SOCIAL: 
            let newSelected = []
            let unselectedSocial = null
            prevState.selected.forEach((social) => {
                if(social.socialID !== action.socialID)
                    newSelected.push(social)
                else unselectedSocial = social
            })

            let newOtherSocial = prevState.otherSocials
            newOtherSocial.push({
                socialID: action.socialID,
                website: unselectedSocial.website,
            })

            
            return {
                ...prevState,
                selected: newSelected,
                otherSocials: newOtherSocial
            }


        case UPDATE_SOCIAL:
        
            let currSocial = []
            prevState.selected.forEach((social) => {
                if(social.socialID === action.socialID){
                    let newValue = JSON.stringify(social)
                    let newObject = JSON.parse(newValue)
                    newObject['value'] = action.value
                    currSocial.push(newObject)
                }
                else currSocial.push(social)

            }) 

            return {
                ...prevState,
                selected: currSocial
            }
        
        default: return prevState
    }
}

export default socialReducer

