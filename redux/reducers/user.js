import { USER_STATE_CHANGE ,USER_POST_PROFILEPAGE_STATE_CHANGE } from "../constants"

const initialState = {
    currentUser:null,
    UserProfilePosts:[]
    // isloading:false,
    // error:''
}
export const user = (state = initialState, action) => {
    switch(action.type){
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser:action.currentUser
            }
        case USER_POST_PROFILEPAGE_STATE_CHANGE:
            return {
                ...state,
                UserProfilePosts:action.UserProfilePosts
            }
        default:    
        return state;
    }
}