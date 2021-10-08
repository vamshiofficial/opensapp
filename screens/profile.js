import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions,StatusBar, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab ,TabHeading, Footer, FooterTab, Content} from 'native-base';
//-----redux
import { connect, useSelector } from 'react-redux';
//----redux
//----------
//----------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
//-----------
import colors from '../components/styles/colors';
import fonts from '../components/styles/fonts';
//-----------

//------------
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
//---
//---
//---
import Profile_info from './profile/image_info';
import Posts from './profile/posts';
import ImagePost from './items/imagepost';
   const ProfilePage = (route) => {
      //const user_id = props.route.params;
     
      //const user_id = route.params.user_id;
      //alert(route.params.user_id);
      // const Tab1 = () => {
      //    return(
      //    <View style={{padding:20}}>
      //       <Text>tab 1</Text>
      //    </View>
      //    )
      // }
      // const Tab2 = () => {
      // return(
      //    <View style={{padding:20}}>
      //    <Text>tab 2</Text>
      // </View>
      // )
      // }
      // const Tab3 = () => {
      // return(
      //    <View style={{padding:20}}>
      //    <Text>tab 3</Text>
      // </View>  
      // )
      // }
    return(
         <View contentContainerStyle={{ flexGrow: 1 }} scrollEnabled>
               <View style={styles.BodyTop}></View>
               <View style={styles.Body}>
                  <Profile_info />
                  {/* <Posts id={navigation} /> */}
               </View>
               <View style={{backgroundColor:colors.bglight,paddingVertical:10}}>
                  <Text>sfd fsdf sd fsd </Text>
                  <View style={styles.BodyTabs}></View>
                  <View style={styles.BodyBottom}></View> 
               </View>
         </View>
    );
}
export default ProfilePage;
const styles = StyleSheet.create({
   container:{
    backgroundColor:'red',
    flex:1,
    width:DeviceWidth,
    height:DeviceHeight
   },
   BodyTop:{
    backgroundColor:colors.secondary,
    height:120,
    width:'100%',
   },
  
   Body:{
    backgroundColor:colors.white,
    width:'100%',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    marginTop:-17,
    paddingTop:30,
    paddingBottom:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5.46,
    elevation: 2,
   },

   BodyTabs:{
   padding:25,
   backgroundColor:colors.white3,
    },
   BodyBottom:{
      backgroundColor:colors.white3,
     padding:20,
   },
   btns_container:{
     position:'absolute',
     bottom:60,
      width:DeviceWidth,
      height:40,
      flexDirection:'row'
   }
});