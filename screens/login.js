import React, { useState ,Component} from "react";
import * as Animatable from 'react-native-animatable';
//------------------
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    StyleSheet,
    
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    StatusBar,
    Alert,
    ActivityIndicator,
    Dimensions
} from 'react-native';
//----------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
//-----------
import colors from '../components/styles/colors';
import fonts from '../components/styles/fonts';
//-----------
import {AuthContext} from '../components/context';
//---------
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
/**==================================================================================================
 * ==================================================================================================
 * ==================================================================================================
 */
  const LoginPage = ({navigation}) => { 
    // ===========================
    // ===========================
    const {signIn} =  React.useContext(AuthContext);
    //------------
    const [data,setData] = React.useState({
        userName : '',
        password : '',
        check_textinputchange:false,
        secureTextEntry : true,
        isValidUser: true,
        isValidPassword: true,
        lodingState: false
    });
    const[loggedData,SetloggedData] = useState('');
    //----------------------------------------------
    const textInputChange = (val) => {
        if(val.trim().length >= 4){
           setData({
               ... data,
               userName:val,
               check_textinputchange:true,
               isValidUser: true
           })
        }
        else{
            setData({
                ... data,
                userName:val,
                check_textinputchange:false,
                isValidUser: false
            })
        }
    }
    //===============================================
    const HandlePasswordChange = (val) => {
        if(val.trim().length >= 6){
            setData({
                ...data,
                password:val,
                isValidPassword:true
            });
        }
        else{
            setData({
                ...data,
                password:val,
                isValidPassword:false
            });
        }
    }
    //------------------------------------------------
    const UpdateSecreEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    //------------------------------------------------
    const handleValidUSer = (val) => {
        if(val.trim().length >= 4){
            setData({
                ...data,
                isValidUser: true
            })
        }
        else{
            setData({
                ...data,
                isValidUser: false
            })
        }
    }
    //================================================
    const LoginHandler = (userName,password) => {
        setData({
            ...data,
           lodingState:true
        })
        if(userName.length==0 || password.length==0)
         {
            setData({
                ...data,
               lodingState:false
            })
             Alert.alert('Inputs missing','userName or password missing',[{text:'Okay'}]);
             return;
         }
         else{
                    var InsertAPIURL='https://esigm.com/opens/app_files/login.php';
                    var headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    };
            
                    var Data = {
                        Loginwith:userName,
                        password:password
                    };
                    fetch(InsertAPIURL,
                        {
                            method:'POST',
                            headers:headers,
                            body: JSON.stringify(Data)
                        }
                        )
                        .then((response)=>response.json())
                        .then((RES)=>
                        {   
                           // console.log('result'+JSON.stringify(RES))
                           // SetloggedData(JSON.stringify(RES))
                            //console.log(RES[0].id)
                            const FoundedUser = RES[0].id;
                           // console.warn(FoundedUser)
                         signIn(FoundedUser);
                            // const Returned = JSON.stringify(RES)
                            // if(Returned[0].Message == "OPENSAPP_LOGIN_SUCCESSFULL"){
                              
                              
                            //     const FoundedUser = Message;
                            //     setData({
                            //         ...data,
                            //        lodingState:false
                            //     })
                            //     signIn(FoundedUser);
                            //    Alert.alert('DONE','successfully logged in',[{text:'Okay'}]); 
                               
                            // }
                            // else{
                            //     setData({
                            //         ...data,
                            //        lodingState:false
                            //     })
                            //     Alert.alert('Invalid user','userName or password wrong',[{text:'Okay'}]); 
                            //     return;
                            // }
                        })
                        .catch(function (gg) {
                            //handle error
                            console.log(gg)
                        });
         }
    }
/**==================================================================================================
 * ==================================================================================================
 * ==================================================================================================
 */
        return(
            
        <View style={styles.container}>
             <StatusBar backgroundColor={colors.secondary} />
            
            <View style={styles.topContainer}>
                <Text style={styles.HeddingText}>
                   Login..
                </Text>
                <Text style={styles.HeddingCaption}>the original screen, compare your implementation to mine. Then decide for yourself which one is better!</Text>
            </View>
            <Animatable.View style={styles.bottomContainer} animation="slideInUp" duration={1000}>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="userName/mobile."
                    placeholderTextColor="#003f5c"
                    autoCapitalize='none'
                   // value="5998877662"
                    onChangeText={(val)=>textInputChange(val)}
                    onEndEditing={(e)=>handleValidUSer(e.nativeEvent.text)}
                    />
                   <View>
                   {data.check_textinputchange
                           ?
                           <FeatherIcon name='check' style={{fontSize:13,color:"green"}} />
                           :
                           <FeatherIcon name='check' style={{fontSize:13,color:"red"}} />
                        }
                   </View>
                </View>
                {data.isValidUser?null
                :
                <Animatable.View animation="flipInY" duration={1000}>
                    <Text style={styles.errorText}>Enter username/Mobile number must have min 4 letters.Numbers</Text>
                </Animatable.View>
                }
                    <View style={styles.inputView}>
                        <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                       // value="5998877662"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val)=>HandlePasswordChange(val)}
                        />
                       <TouchableOpacity
                       onPress={UpdateSecreEntry}>
                           {data.secureTextEntry
                           ?
                           <FeatherIcon name='eye-off' style={{fontSize:13,color:"gray"}} />
                           :
                           <FeatherIcon name='eye' style={{fontSize:13,color:"gray"}} />
                        }
                       </TouchableOpacity>
                    </View>
                    {data.isValidPassword?null
                    :
                    <Animatable.View animation="flipInY" duration={1000}>
                        <Text style={styles.errorText}>Enter  Password must have min 8 Letters/Chracters</Text>
                     </Animatable.View>
                    }

                    <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'FormTest' })}>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>
                        {data.lodingState?
                            <Animatable.View style={{
                                width: DeviceWidth,
                                }} animation="bounceIn" duration={200}>
                                <ActivityIndicator animating={true} size="large" style={{opacity:1,}} color={colors.primary}  />
                            </Animatable.View>
                            :
                            null
                        }
                    <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {LoginHandler(data.userName,data.password)}}
                    >
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
               <View style={styles.RegisterContainer}>
               <View>
               <Text style={styles.RegisterText}>
                   Don't have an account yet ?
                </Text>
               </View>
                <View style={styles.registerBtn}>
                     <TouchableOpacity
                      onPress={() => navigation.navigate('Root', { screen: 'Register' })}
                      >
                        <Text style={{color:'#3498db',marginLeft:10,}}>Create free account</Text>
                    </TouchableOpacity>
                </View>
               </View>
               <View>
                <TouchableOpacity style={{marginTop:15,backgroundColor:'#fff',paddingHorizontal:15,paddingVertical:5,borderColor:'#ccc',borderRadius:25,borderWidth:1}} 
                   onPress={() => navigation.navigate('Root', { screen: 'Home' })}
                    >
                    <Text style={{color:'#ee3758'}}>Home Page</Text>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        
    </View>
    );
}
/**==================================================================================================
 * ==================================================================================================
 * ==================================================================================================
 */
export default LoginPage;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.secondary,
    },
    topContainer:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:25,
    },
    HeddingText:{
        color:'#fff',
        fontSize:30,
        textAlign:'left',
    },
    HeddingCaption:{
        color:'#ccc',
        fontSize:15,
        marginTop:25,
    },
    bottomContainer:{
        flex:3,
        marginBottom:0,
        paddingVertical:30,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'#fff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        shadowColor: 'black',
        shadowOffset: {
          width: -2,
          height: 26,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation:10
    },
    inputView: {
        backgroundColor: "#f3f3f3",
        borderRadius: 30,
        width: "85%",
        height: 45,
        marginBottom: 20,
        flexDirection:'row',
        alignItems:'center',
        paddingRight:15,
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
      forgot_button: {
        width:250,
        height: 30,
        color:'#cccc',
        textAlign:"right",
      },
     
      loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ee3758",
      },
      loginText:{
        color:'#fff',
        fontWeight:'bold',
      },
      RegisterText:{
        color:'#ddd',
      },
      RegisterContainer:{
          flexDirection:"row",
          
          borderTopWidth:1,
          borderTopColor:'#f3f3f3',
          marginTop:35,
          paddingVertical:25,
      },
      registerBtn:{
        
      },
      errorText:{
          color:colors.red,
          fontSize:12
      }
});
