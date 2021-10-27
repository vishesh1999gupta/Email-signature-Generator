import { ADD_SOCIAL, REMOVE_SOCIAL, UPDATE_SOCIAL } from "../actions/actionType"

const initialState = {
    selected: [
        {
            socialID: "Facebook",
            website: "https://www.facebook.com",
            source: "https://i.ibb.co/n09rLQC/facebook.png",
            value: ""
        },
        {
            socialID: "Twitter",
            website: "https://www.twitter.com",
            source: "https://i.ibb.co/n34NSsS/twitter-squared.png",
            value: ""
        },
        {
            socialID: "LinkedIn",
            website: "https://www.linkedin.com",
            source: "https://i.ibb.co/TwgtJq6/linkedin.png",
            value: ""
        }
    ],
    otherSocials: [
        {
            socialID: "Instagram",
            website: "https://www.instagram.com",
            source: "https://i.ibb.co/BKvYdmS/instagram-new.png"
        },
        {
            socialID: "Pinterest",
            website: "https://www.pinterest.com",
            source: "https://i.ibb.co/sbcstPs/pinterest-v1.png"
        },
        {
            socialID: "Youtube",
            website: "https://www.youtube.com",
            source: "https://i.ibb.co/k3vT997/youtube-play.png"
        },
        {
            socialID: "Tumblr",
            website: "https://www.tumblr.com",
            source: "https://i.ibb.co/SRv70SR/tumblr.png"
        },
        {
            socialID: "Github",
            website: "https://www.github.com",
            source: "https://i.ibb.co/wRQ2cP1/github.png"
        },
        {
            socialID: "Snapchat",
            website: "https://www.snapchat.com",
            source: "https://i.ibb.co/wCbppC1/snapchat.png"
        },
        {
            socialID: "StackOverFlow",
            website: "https://www.stackoverflow.com",
            source: "https://i.ibb.co/s2KQJdv/732248.png"
        },
        {
            socialID: "Reddit",
            website: "https://www.reddit.com",
            source: "https://i.ibb.co/Wk1q26M/reddit.png"
        },
        {
            socialID: "Telegram",
            website: "https://www.telegram.com",
            source: "https://i.ibb.co/h7Tf9D2/telegram-app-v1.png"
        },
        {
            socialID: "Whatsapp",
            website: "https://www.whatsapp.com",
            source: "https://i.ibb.co/n8NznCj/whatsapp.png"
        },
        {
            socialID: "Medium",
            website: "https://www.medium.com",
            source: "https://i.ibb.co/NLgwLFK/medium-monogram-v1.png"
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
                source: selectedSocial.source,
                value: ''
            })

            
            return {
                ...prevState,
                selected: newSocial,
                otherSocials: newOtherSocials
            }

        case REMOVE_SOCIAL: 

            if(action.socialID === null){
                return {
                    ...initialState
                }
            }
            
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
                source: unselectedSocial.source
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

