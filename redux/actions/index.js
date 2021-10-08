import { USER_POST_PROFILEPAGE_STATE_CHANGE, USER_STATE_CHANGE } from '../constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
//============================================
//----------------functions will startfrom hear
export function fetchUser(){
    return(
        async(dispatch) => {
        let id = '';
        try {
        id = await AsyncStorage.getItem('userToken')
        }
        catch(e){
            console.log(e)
        }
        const apiURL = "https://esigm.com/opens/app_files/get_user.php?user_id="+id;
        fetch(apiURL).then((res)=>res.json())
        .then((resJson) => {
            if(resJson){
                dispatch({ type:USER_STATE_CHANGE, currentUser:resJson})
            }
         })
      
    })
}
//============================================
export function fetchUserProfilePosts(){
    return(
        async(dispatch) => {
        let id = '';
        try {
        id = await AsyncStorage.getItem('userToken')
        }
        catch(e){
            console.log(e)
        }
       // const apiURL = "https://esigm.com/opens/app_files/posts?_posts='user_profilepage_posts'&_limit=10&user_id="+id;
       const apiURL = "https://esigm.com/opens/app_files/posts?_limit=10&_page="+1;
       fetch(apiURL).then((res)=>res.json())
        .then((resJson) => {
            //console.log(resJson);
            if(resJson){
                dispatch({ type:USER_POST_PROFILEPAGE_STATE_CHANGE, UserProfilePosts:resJson})
            }
         })
      
    })
}