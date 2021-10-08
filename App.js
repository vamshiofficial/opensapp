import React, {useEffect} from 'react';
import { StyleSheet, Text, View,StatusBar,ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import all screens
import{NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

//import screens
import BottomTabs from './components/navigations/Tabs';
import {DrawerContent} from './components/navigations/sidebar';
// -------------------
import OnBoardPage from './screens/onboardings';
import LoginPage from './screens/login';
import RegisterPage from './screens/register';
import HomePage from './screens/home';
import {AuthContext} from './components/context';
//--------------------
import { useTheme } from '@react-navigation/native';
import Likes from './screens/items/likes';
import Notifications from './screens/items/notifications';
import Post_Details from './screens/items/post_details';
import FormTest from './screens/reg';
//--------------------
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
const Store = createStore(rootReducer, applyMiddleware(thunk))
// export default store
import Main from './screens/main';
import Comments_list from './screens/items/comments_list';

// improt natigations types
enableScreens();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackNav = createStackNavigator();
//--------------------
const App = () => {
  // const [isLoading,setIsLoading] = React.useState(true);
  // const [userToken,setUserToken] = React.useState(null);
  const initialLoginState  = {
    isLoading:true,
    userName:null,
    userToken:null
  }
  const LoginReducer =  (prevState,action) => {
    switch(action.type){
      case 'RETRIVE_TOKEN':
        return{
        ...prevState,
        userToken:action.token,
        isLoading:false,
        };
      case 'LOGIN':
        return{
          ...prevState,
         // userName:action.id,
          userToken:action.token,
          isLoading:false,
        };
      case 'LOGOUT':
        return{
          ...prevState,
          userName:null,
          userToken:null,
          isLoading:false,
        };
      case 'REGISTER':
        return{
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false,
        };
    }
  };
  //-----
  const[loginState,dispatch] = React.useReducer(LoginReducer,initialLoginState)
  // ----
  const authContext = React.useMemo(() => ({
    signIn: async(FoundedUser) => { 
     const userToken = String(FoundedUser);
     //const userName = FoundedUser[1].username;
       try {
       // userToken = 'user_1';
       //console.log('app.js-login'+userToken);
        await AsyncStorage.setItem('userToken', userToken)
      } 
      catch (e) {
        console.log(e);
      }
     
     dispatch({type:'LOGIN',token:userToken});
    },
    signOut:async() =>{
      try {
        userToken = null;
        await AsyncStorage.removeItem('userToken');
      } 
      catch (e) {
        console.log(e);
      }
      dispatch({type:'LOGOUT'});
    },
    signUp:() => {
      const userToken = 'one';
      const userName = 'dummy user';
      dispatch({type:'REGISTER',id:null,token:null});
    },
  }),[]);
  useEffect(() =>{
    setTimeout( async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } 
      catch (e) {
        console.log(e);
      }
      dispatch({type:'RETRIVE_TOKEN',token:userToken});
    },1000);
      },[]);
  if(loginState.isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator animating={true} size="large" style={{opacity:1,}} color="#ee3758"  />
      <Text>loading</Text>
    </View>
    );
  }
  function Root({navigation}) {
    return (
      <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
         <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
         <Stack.Screen name="FormTest" component={FormTest} options={{ headerShown: false }} />
         <Stack.Screen name="onboard" component={OnBoardPage} options={{ headerShown: false }} />
         <Stack.Screen name="Home" component={BottomTabs} options={{ headerShown: false }} />
         {/* <Stack.Screen name="Comments" component={Comments} options={{ headerShown: false }} /> */}
         <Stack.Screen name="Likes" component={Likes} options={{ headerShown: false }} />
         <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown:false}} />
         
      </Stack.Navigator>
    );
  }
  // -----------------------------------------------------------------------------------
  //----------------------------------app 1st lauch or not-----------------------------=
  // const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     if(value == null){
  //       AsyncStorage.setItem('alreadyLaunched','true');
  //       setIsFirstLaunch(true);
  //       //alert('1st load');
  //     }
  //     else{
  //       setIsFirstLaunch(false);
  //      //alert('loaded');
  //     }
  //   });
  // },[]);

  // if( isFirstLaunch === null ){
  //  return null;
  // }
  // else if( isFirstLaunch === true){
  //   return(
  //     <NavigationContainer>
  //     <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
  //        <Drawer.Screen name="onboard" component={OnBoardPage} />
  //        <Drawer.Screen name="Home" component={BottomTabs} /> 
  //        <Drawer.Screen name="Root" component={Root} /> 
  //      </Drawer.Navigator>
  //   </NavigationContainer>
  //   );
  // }
  // else{
  //  return(
  //   <NavigationContainer>
  //     <Root />
  //     {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
  //     <Drawer.Screen name="Home" component={BottomTabs} />
  //     <Drawer.Screen name="Root" component={Root} /> 
  //      </Drawer.Navigator> */}
  //   </NavigationContainer>
  //  );
  // }

  // -----------------------------------------------------------------------------------
  //----------------------------------app 1st lauch or not-----------------------------=


const DrawerCon = () => {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       
      <Text>Login to get Navigation list</Text>
    </View>
  )
}
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      {loginState.userToken != null ?
    (
          <Provider store={Store}>
            <StackNav.Navigator>
               <StackNav.Screen name="Main" component={Main} options={{headerShown:false}} />
               <StackNav.Screen name="Comments_list" component={Comments_list} options={
                  ({route}) => ({
                     headerShown: false }) 
                  }
                 
                 />
            </StackNav.Navigator>
            {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
              <Drawer.Screen name="Main" component={Main} />
            </Drawer.Navigator> */}
          </Provider>
    ) 
     :
      <Drawer.Navigator drawerContent={props => <DrawerCon/>}>
             {/* <Drawer.Screen name="Home" component={BottomTabs} /> */}
            <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
     // <Root />
    }
    </NavigationContainer>
    </AuthContext.Provider>
 
  );
 }
export default App;