import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    SafeAreaView, 
    ScrollView,
    StatusBar,
    Button,
    TouchableHighlight
} from 'react-native';
import {Picker,Item } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from "react-hook-form";
//------------------
import AsyncStorage from '@react-native-async-storage/async-storage';
//------------------
import colors from '../components/styles/colors';
import {AuthContext} from '../components/context';
//---------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import fonts from "../components/styles/fonts";
import { color } from "react-native-reanimated";
import { ColorPicker } from "react-native-btr";
/**==================================================================================================
 * ==================================================================================================
 * ==================================================================================================
 */
const RegisterPage = ({navigation}) => {
        //------------------------
        const { control, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
      

/**============================================================================================ 
 * --------------------------------------------------------------------------------------------
*/
    return(  
    <SafeAreaView style={styles.main_container}>
      <StatusBar backgroundColor={colors.secondary}  />
      <ScrollView style={styles.scrollView}>
            <View style={styles.topContainer}>
                <Text style={styles.HeddingText}>
                   Create new account..
                </Text>
                <Text style={styles.HeddingCaption}>Create one free account.Then you can use it all over esigm products.</Text>
            </View>
            <View style={styles.bottomContainer}>
             {/* ======================= course type ================== */}
              <View style={styles.SelectView}>
                    <Controller 
                      control={control}
                      render={({ field}) => (
                        
                            <Picker
                            mode='dialog'
                            iosIcon={<Icon name="arrow-down" />}
                            placeholderIconColor="red"
                            style={styles.selectBox}
                            onValueChange={(e) => field.onChange(e)}
                            selected={field.value}
                            >
                            <Picker.Item label="select course" value="" />
                            <Picker.Item label="How do feel about this post?" value="key0" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4"  />
                            </Picker>
                        
                      )}
                      name="Course"
                      rules={{ required: true }}
                      defaultValue=""
                      />
                  {errors.Course && <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>Course is required.</Animatable.Text>}
                  
              </View>
              {/* ======================= account type ================== */}
              <View style={styles.SelectView}>
                    <Controller 
                      control={control}
                      render={({ field}) => (
                        
                            <Picker
                            mode='dialog'
                            color={'red'}
                            iosIcon={<Icon name="arrow-down" />}
                            placeholderIconColor="#007aff"
                            style={styles.selectBox}
                            onValueChange={(e) => field.onChange(e)}
                            selected={field.value}
                            >
                            <Picker.Item label="select Account Type" value="" />
                            <Picker.Item label="How do feel about this post?" value="key0" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4"  />
                            </Picker>
                        
                      )}
                      name="AccountType"
                      rules={{ required: true }}
                      defaultValue=""
                      />
                  {errors.AccountType && <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>Account Type is required.</Animatable.Text>}
                  
              </View>
               {/* ======================= gender type ================== */}
               <View style={styles.SelectView}>
                    <Controller 
                      control={control}
                      render={({ field}) => (
                        
                            <Picker
                            mode='dialog'
                            placeholderIconColor="#007aff"
                            style={styles.selectBox}
                            iosIcon={<IonIcon name="chevron-down-outline" />}
                            onValueChange={(e) => field.onChange(e)}
                            selected={field.value}
                            itemStyle={{fontFamily:fonts.PrimaryFont}}
                            >
                            <Picker.Item label="select Gender Type" value="" />
                            <Picker.Item label="How do feel about this post?" value="key0" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4"  />
                            </Picker>
                        
                      )}
                      name="Gender"
                      rules={{ required: true }}
                      defaultValue=""
                      />
                  {errors.Gender && <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>Gender Type is required.</Animatable.Text>}
              </View>
              {/* ======================= good name ================== */}
              <View style={styles.inputView}>
              <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.TextInput}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="Good name"
                    />
                  )}
                  name="GoodName"
                  rules={{
                      required: true,
                      required: 'Name is a Important',
                          minLength: {
                          value: 3,
                          message: 'Min three char required',
                          },
                      
                      }}
                  defaultValue=""
                  
                />
                {errors.GoodName && 
                <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>
                  {errors.GoodName.message} 
                </Animatable.Text>}
              </View>
              {/* ======================= user name ================== */}
              <View style={styles.inputView}>
              <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.TextInput}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="Username for esigm products"
                    />
                  )}
                  name="Username"
                  rules={{
                      required: true,
                      required: 'Username is a Important',
                          minLength: {
                          value: 3,
                          message: 'Min three char required',
                          },
                      
                      }}
                  defaultValue=""
                  
                />
                {errors.Username && 
                <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>
                  {errors.Username.message} 
                </Animatable.Text>}
              </View>
              {/* ======================= Phone ================== */}
              <View style={styles.inputView}>
              <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.TextInput}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="Mobile number"
                      keyboardType="number-pad"
                    />
                  )}
                  name="Phone"
                  rules={{
                      required: true,
                      required: 'Mobile number is a Important',
                          minLength: {
                          value: 10,
                          message: 'Min 10 numbers required',
                          },
                      
                      }}
                  defaultValue=""
                  
                />
                {errors.Phone && 
                <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>
                  {errors.Phone.message} 
                </Animatable.Text>}
              </View>
              {/* =======================  Email ================== */}
              <View style={styles.inputView}>
              <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.TextInput}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="Email address"
                      keyboardType="email-address"
                    />
                  )}
                  name="Email"
                  rules={{ 
                    required: 'Email is required',
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Invalid email address', }
                    }}
                 defaultValue=""
                  
                />
                {errors.Email && 
                <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>
                  {errors.Email.message} 
                </Animatable.Text>}
              </View>
              {/* ======================= Passoward ================== */}
              <View style={styles.inputView}>
              <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.TextInput}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      secureTextEntry={true}
                      placeholder="Password"
                    />
                  )}
                  name="password"
                  rules={{
                      required: true,
                      required: 'Passoward is a Important',
                          minLength: {
                          value: 6,
                          message: 'Min six char required',
                          },
                      
                      }}
                  defaultValue=""
                  
                />
                {errors.password && 
                <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>
                  {errors.password.message} 
                </Animatable.Text>}
              </View>
              {/* ======================= Passoward ================== */}
              <View style={styles.inputView}>
              <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.TextInput}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      secureTextEntry={true}
                      placeholder="ConfirmPassword"
                    />
                  )}
                  name="ConfirmPassword"
                  rules={{
                      required: true,
                      required: 'Passoward is a Important',
                          minLength: {
                          value: 6,
                          message: 'Min six char required',
                          },
                      
                      }}
                  defaultValue=""
                  
                />
                {errors.ConfirmPassword && 
                <Animatable.Text animation="lightSpeedIn" duration={500} style={styles.errorText}>
                  {errors.ConfirmPassword.message} 
                </Animatable.Text>}
              </View>
                <TouchableHighlight style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.register_text}>REGISTER</Text>
                </TouchableHighlight>
                    <TouchableOpacity>
                        <Text style={styles.forgot_button_text}>Forgot Password?</Text>
                    </TouchableOpacity>
                
               <View style={styles.RegisterContainer}>
               <View>
               <Text style={styles.RegisterText}>
                   Have an account ? 
                </Text>
               </View>
                <View style={styles.registerBtn}>
                     <TouchableOpacity
                     onPress={() => navigation.navigate('Root', { screen: 'Login' })} >
                        <Text style={styles.login_text}>Login</Text>
                    </TouchableOpacity>
                </View>
                
               </View>
               <View>
                <TouchableOpacity style={styles.home_btn} 
                   onPress={() => navigation.navigate('Root', { screen: 'Home' })} >
                    <Text style={styles.home_text}>Home Page</Text>
                </TouchableOpacity>
                </View>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default RegisterPage;
const styles = StyleSheet.create({
   SafeAreaView:{
  flex:1
   },
      scrollView: {
        backgroundColor: '#ee3758',
        marginHorizontal: 0,  
      },
    topContainer:{
        justifyContent:'center',
        paddingHorizontal:25,
        height:200,
    },
    HeddingText:{
        color:'#fff',
        fontSize:30,
        textAlign:'left',
        fontFamily:fonts.PrimaryFont
    },
    HeddingCaption:{
        color:'#ccc',
        fontSize:15,
        marginTop:25,
        fontFamily:fonts.PrimaryFont
    },
    bottomContainer:{
       
        paddingVertical:30,
        alignItems:"center",
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    inputView: {
   
        borderRadius: 3,
        width: "90%",
        height: null,
        marginBottom: 20,
      },
      SelectView: {
        borderRadius: 3,
        width: "90%",
        height: null,
        marginBottom: 20,
        justifyContent:'center'
      },
     
      TextInput: {
        height: 40,
        width:'100%',
        flex: 1,
        padding: 10,
        paddingLeft:20,
        marginLeft: 0,
        fontFamily:fonts.PrimaryFont,
        backgroundColor:colors.bglight,
   
      },
      register_text:{
        fontFamily:fonts.PrimaryFont,
        color:colors.white,
      },
      forgot_button_text: {
        width:250,
        height: 30,
        color:'#cccc',
        textAlign:"right",
        fontFamily:fonts.PrimaryFont
      },
      selectBox:{
        color:colors.black,
        marginLeft:1,
        fontFamily:fonts.PrimaryFont,
        backgroundColor:'red',
        padding:0,
        width:'100%',
        height:40
      },
      picker_text:{
        color:'red',
        fontFamily:fonts.PrimaryFont
      },
      loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ee3758",
        fontFamily:fonts.PrimaryFont
      },
      login_text:{
        color:colors.directs,
        marginLeft:10,
        fontFamily:fonts.PrimaryFont
      },
      RegisterText:{
        color:'#ddd',
        fontFamily:fonts.PrimaryFont
      },
      RegisterContainer:{
          flexDirection:"row",
          
          borderTopWidth:1,
          borderTopColor:'#f3f3f3',
          marginTop:35,
          paddingVertical:25,
      },
     text_input_info_container:{
       width:'80%',
       paddingBottom:5,
       height:null,
     },
     errorText:{
       color:colors.secondary,
       fontFamily:fonts.PrimaryFont
     },
     home_btn:{
      marginTop:15,backgroundColor:'#fff',paddingHorizontal:15,paddingVertical:5,borderColor:'#ccc',borderRadius:25,borderWidth:1
     },
     home_text:{
      color:colors.secondary,
      fontFamily:fonts.PrimaryFont
     }
});
