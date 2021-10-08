import React,{useState} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//-----redux
import { connect, useSelector } from 'react-redux';
//----redux
function HomePage(props){
  const counter = useSelector((state) => state.userState.currentUser);
  if(counter == undefined) {
              return(
                  <View />
              )
      }
    return(
        <View style={styles.container}>
          <Text> id= {counter[0].id} name={counter[0].fname} </Text>
            {/* {
                display_data?
                <Text>yes {currentUser[0].fname} </Text>
                :
                <Text>data error </Text>
            }
            <Text>data: { currentUser[0].fname } </Text> */}
            {/* <Button
            title="addpost"
           onPress={()=> navigation.navigate('Root', { screen: 'onboard' })}
            />
            <TouchableOpacity onPress={()=> navigation.navigate('Root', { screen: 'Login' })}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
            <Button
            title="Register"
           onPress={()=> navigation.navigate('Root', { screen: 'Register' })}
            />
             <Button
            title="Comments"
           onPress={()=> navigation.navigate('Root', { screen: 'Comments' })}
            />
              <Button
            title="Likes"
           onPress={()=> navigation.navigate('Root', { screen: 'Likes' })}
            />
            <Button
          title="Notifications"
         onPress={()=> navigation.navigate('Root', { screen: 'Notifications' })}
          />
          <Button
          title="Post_details"
         onPress={()=> navigation.navigate('Root', { screen: 'Post_Details' })}
          /> */}
         <Button 
         
         title='dasasd'
         onPress={ ()=> alert('asdsdad')} /> 
                </View>
    )
}
const styles = StyleSheet.create({
   container:{
       flex:1,
    justifyContent:'center',
    alignItems:'center'
   } 
});
export default HomePage;
