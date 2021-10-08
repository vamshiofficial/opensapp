import React from "react";
import { Text, View, TextInput, Button, Alert,StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {Picker,Item } from 'native-base';
export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="ed we we "
          />
        )}
        name="firstName"
        rules={{
             required: true,
             required: 'this is a required',
                minLength: {
                value: 2,
                message: 'Min length is 2',
                },
            
            }}
        defaultValue=""
        
      />
      {errors.firstName && <Text> {errors.firstName.message} </Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="email"
          />
        )}
        name="email"
        rules={{ 
            required: 'this is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address', }
            }}
        defaultValue=""
      />
        {errors.email && <Text>{errors.email.message}</Text>}
      <Controller 
       control={control}
       render={({ field}) => (
        
            <Picker
            mode='dialog'
            iosIcon={'sfds'}
            style={{ width: undefined }}
            placeholderIconColor="#007aff"
            style={styles.selectBox}
            //selectedValue={data.Course}
            //onValueChange={(itemValue, itemIndex) => textCourseChange(itemValue)}
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
           {errors.Course && <Text>This is required.</Text>}
   
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
const styles = StyleSheet.create({
input:{
    backgroundColor:'#f1f1f1',
    width:150,
    height:40
}

})
    //     const [data,setData] = React.useState({
    //       Course : 'select_course',
    //       Account_Type : 'select_accountType',
    //       Gender : 'select_gender',
    //       Fname : '',
    //       userName : '',
    //       Email:'',
    //       Mobile:'',
    //       Password : '',
    //       Confirm_password:'',
    //       //----
    //       check_course:true,
    //       check_accout_type:true,
    //       check_fname:true,
    //       check_gender:true,
    //       check_username:true,
    //       check_email:true,
    //       check_mobile:true,
    //       check_password:true,
    //       check_confirm_password:true,
    //       //----
    //       secureTextEntry : true,
    //       isValidUser: true,
    //       isValidPassword: true,
    //       lodingState: false
    //   });
    //   const [RegisterNow,SetRegisterNow] = React.useState(false);
    //   //const [course,Setcourse] = React.useState('');
    //   //=======================================
    //   //---------------------------------------
    //     const textCourseChange = (val) => {
    //       if(val != 'select_course'){
    //         setData({
    //             ... data,
    //             Course:val,
    //             check_course:true,
    //         })
    //       }
    //       else{
    //           setData({
    //               ... data,
    //             Course:val,
    //               check_course:false,
    //           })
    //       }
    //     }
    //     //---------------------------------------
    //     const textGenderChange = (val) => {
    //       if(val != 'select_gender'){
    //         setData({
    //             ... data,
    //             Gender:val,
    //             check_gender:true,
    //         })
    //       }
    //       else{
    //           setData({
    //               ... data,
    //             Gender:val,
    //               check_gender:false,
    //           })
    //       }
    //     }
    //      //---------------------------------------
    //      const textAccountTypeChange = (val) => {
    //       if(val != 'select_accountType'){
    //         setData({
    //             ... data,
    //             Account_Type:val,
    //             check_accout_type:true,
    //         })
    //       }
    //       else{
    //           setData({
    //               ... data,
    //             Account_Type:val,
    //               check_accout_type:false,
    //           })
    //       }
    //     }
    //   //=======================================
    //   const textFnameChange = (val) => {
    //     if(val.trim().length >= 3){
    //       setData({
    //           ... data,
    //           Fname:val,
    //           check_fname:true,
    //       })
    //     }
    //     else{
    //         setData({
    //             ... data,
    //           Fname:val,
    //             check_fname:false,
    //         })
    //     }
    //     // return(
    //     //   alert(val.length)
    //     // )
    //   }
    //   //=======================================
    //   const textUnameChange = (val) => {
    //     if(val.trim().length >= 3){
    //       setData({
    //           ... data,
    //           userName:val,
    //           check_username:true,
    //       })
    //     }
    //     else{
    //         setData({
    //             ... data,
    //           userName:val,
    //             check_username:false,
    //         })
    //     }
    //   }
    //   //=======================================
    //   const textMobileChange = (val) => {
    //     if(val.trim().length >= 10){
    //       setData({
    //           ... data,
    //           Mobile:val,
    //           check_mobile:true,
    //       })
    //     }
    //     else{
    //         setData({
    //             ... data,
    //           Mobile:val,
    //             check_mobile:false,
    //         })
    //     }
    //   }
    //   //=======================================
    //   const textEmailChange = (val) => {
    //     if(val.trim().length >= 8){
    //       setData({
    //           ... data,
    //           Email:val,
    //           check_email:true,
    //       })
    //     }
    //     else{
    //         setData({
    //             ... data,
    //           Email:val,
    //             check_email:false,
    //         })
    //     }
    //   }
    //   //=======================================
    //   const textPasswordChange = (val) => {
    //     if(val.trim().length >= 6){
    //       setData({
    //           ... data,
    //           Password:val,
    //           check_password:true,
    //       })
    //     }
    //     else{
    //         setData({
    //             ... data,
    //           Password:val,
    //             check_password:false,
    //         })
    //     }
    //   }
    //   //=======================================
    //   const textConfirmPasswordChange = (val) => {
    //     if(val.trim().length >= 6){
    //       setData({
    //           ... data,
    //           Confirm_password:val,
    //           check_confirm_password:true,
    //       })
    //     }
    //     else{
    //         setData({
    //             ... data,
    //           Confirm_password:val,
    //             check_confirm_password:false,
    //         })
    //     }
    //   }
    //   Finderror = ( _Course,_Account_Type ,_Gender,_Fname,userName,Email,Mobile,Password ,Confirm_password) => {
    //     textCourseChange(_Course);
    //     textAccountTypeChange(_Account_Type);
    //     textGenderChange(_Gender);
    //     textFnameChange(_Fname);
    //     textUnameChange(userName);
    //     textEmailChange(Email);
    //     textMobileChange(Mobile);
    //     textPasswordChange(Password);
    //     textConfirmPasswordChange(Confirm_password);
    //   }
    //   // useEffect(() => {
    //   //   console.warn('register changer')
    //   // },[RegisterNow]);
    //   /**
    //    * =======================================================================
    //    * =======================================================================
    //    * =======================================================================
    //    */
    //  function RegisterHandler  (_Course,_Account_Type ,_Gender,_Fname,_userName,_Email,_Mobile,_Password ,_Confirm_password) {
    //   textCourseChange(_Course);
    //   textAccountTypeChange(_Account_Type);
    //   textGenderChange(_Gender);
    //   textFnameChange(_Fname);
    //   textUnameChange(userName);
    //   textEmailChange(Email);
    //   textMobileChange(Mobile);
    //   textPasswordChange(Password);
    //   textConfirmPasswordChange(Confirm_password);
        
      //   //------------------
      //  if(
      //    ((_Course === 'select_course'|| _Account_Type === 'select_accountType') || _Gender === 'select_gender') ||
      //     ((_Fname.length<=3||_userName.length<=3) || _Email.length<=3) ||
      //     ((_Mobile.length<=3||_Password .length<=3)||_Confirm_password)
      //     ){
      //       alert(data.Account_Type)
         
      //  if(_Course === 'select_course'){
      //   setData({
      //     ... data,
      //     Course:_Course,
      //     check_course:false,
      // })
      // }
      // else{

      // }
      // if(_Account_Type === 'select_accountType'){
      //   setData({
      //     ... data,
      //     Account_Type:_Account_Type,
      //     check_accout_type:false,
      // })
      // }
      // if(_Gender === 'select_gender'){
      //   setData({
      //     ... data,
      //     Gender:_Gender,
      //     check_gender:false,
      // })
      // }
      // if(_Fname.length <= 3){
      //   setData({
      //     ... data,
      //     Fname:_Fname,
      //     check_fname:false,
      // })
      // }
      // if(_userName.length <= 3){
      //   setData({
      //     ... data,
      //     userName:_userName,
      //     check_username:false,
      // })
      // }
      // if(_Mobile.length <= 10){
      //   setData({
      //     ... data,
      //     Mobile:_Mobile,
      //     check_mobile:false,
      // })
      // }
      // if(_Email.length <= 10){
      //   setData({
      //     ... data,
      //     Email:_Email,
      //     check_email:false,
      // })
      // }
      // if(_Password.length <= 8){
      //   setData({
      //     ... data,
      //     Password:_Password,
      //     check_password:false,
      // })
      // }
      // if(_Confirm_password.length <= 8){
      //   setData({
      //     ... data,
      //     Confirm_password:_Confirm_password,
      //     check_confirm_password:false,
      // })
      // }
      //  }
      //  else{
      //   alert('data leud')
      //  }
      

        
        // else{
        //   alert('wofdn fgdg dfg df ')
        // }
       //console.warn('at last')
      
        //   if(_Account_Type === "select_accountType") {
      //     setData({
      //       ... data,
      //       Account_Type:val,
      //       check_accout_type:true,
      //      })
      //     }
      //     else{
      //         setData({
      //             ... data,
      //           Account_Type:val,
      //             check_accout_type:false,
      //         })
      //    }
      //    //---------------------
      //    if(_Course === 'select_course'){
      //     alert(_Course)
      //     setData({
      //       ... data,
      //       Course:_Course,
      //       check_course: false,
      //   });
      //   }
      //  if(_Gender === 'select_gender'){
      //     alert(_Gender)
      //       setData({
      //         ... data,
      //         Gender:_Gender,
      //         check_gender: false,
      //     });
      //     }
      //    else if(_Fname.length != 4){
      //       setData({
      //         ... data,
      //         Fname:_Fname,
      //         check_fname:false,
      //     })
      //     }
      //     else{
      //       alert('somthing going wrong')
      //     }
     // }

//------------------------------------------
