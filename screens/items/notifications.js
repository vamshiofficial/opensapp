import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions,StatusBar, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab ,Left, Body, Right, Title, Subtitle,Button, List, ListItem,Thumbnail,Footer } from 'native-base';
//----------
//import {Shadow} from '../../components/styles/css/comments_styles';
import { Shadow ,Neomorph } from 'react-native-neomorph-shadows';
//----------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
//-----------
import colors from '../../components/styles/colors';
import fonts from '../../components/styles/fonts';
import { color } from 'react-native-reanimated';
//-----------
//------------
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
//---
//---
//---

export default function Notifications(){
    return(
    <View style={{flex:1}}>
            <StatusBar backgroundColor="#ee3758" />
           <View style={styles.Header}>
           <Header
            androidStatusBarColor={colors.secondary}
            transparent

           >
            <Left>
                <Button transparent>
                <FeatherIcon name="chevron-left" style={{fontSize:22,color:colors.black}} />
                </Button>
            </Left>
            <Body>
                <Title style={{color:colors.white5,fontFamily:fonts.PrimaryFont}}>Notifications (782)</Title>
            </Body>
            <Right></Right>
            </Header>
           </View>
       
           <View style={styles.Body}>
       <ScrollView contentContainerStyle={styles.ScrollView}>
        
     
            <List style={styles.List}>
                <ListItem thumbnail style={styles.ListItem}>
                <Left style={styles.Left}>
                    <Thumbnail source={{ uri: 'https://esigm.com/profiles/30cfd3e8c8437171c21930a03b595906.jpg' }} style={styles.thumbnail_image} />
                </Left>
                <Body style={styles.list_body}>
                    <View style={styles.name_text_con}>
                        <Text style={[styles.name_text,{fontWeight:'bold',paddingRight:10,}]}>Kumar Pratik</Text>
                        <Text style={styles.name_text}>Liked your post </Text>
                    </View>
                </Body>
                <Right style={styles.Right}><Text style={styles.time_text}>3:43 pm</Text></Right>
                </ListItem>
                <ListItem thumbnail style={styles.ListItem}>
                <Left style={styles.Left}>
                    <Thumbnail source={{ uri: 'https://esigm.com/profiles/30cfd3e8c8437171c21930a03b595906.jpg' }} style={styles.thumbnail_image} />
                </Left>
                <Body style={styles.list_body}>
                    <View style={styles.name_text_con}>
                        <Text style={[styles.name_text,{fontWeight:'bold',paddingRight:10,}]}>Kumar Pratik</Text>
                        <Text style={styles.name_text}>Liked your post </Text>
                    </View>
                </Body>
                <Right style={styles.Right}><Text style={styles.time_text}>3:43 pm</Text></Right>
                </ListItem>
                <ListItem thumbnail style={styles.ListItem}>
                <Left style={styles.Left}>
                    <Thumbnail source={{ uri: 'https://esigm.com/profiles/30cfd3e8c8437171c21930a03b595906.jpg' }} style={styles.thumbnail_image} />
                </Left>
                <Body style={styles.list_body}>
                    <View style={styles.name_text_con}>
                        <Text style={[styles.name_text,{fontWeight:'bold',paddingRight:10,}]}>Kumar Pratik</Text>
                        <Text style={styles.name_text}>Commented your post </Text>
                    </View>
                </Body>
                <Right style={styles.Right}><Text style={styles.time_text}>3:43 pm</Text></Right>
                </ListItem>
                <ListItem thumbnail style={styles.ListItem}>
                <Left style={styles.Left}>
                    <Thumbnail source={{ uri: 'https://esigm.com/profiles/30cfd3e8c8437171c21930a03b595906.jpg' }} style={styles.thumbnail_image} />
                </Left>
                <Body style={styles.list_body}>
                    <View style={styles.name_text_con}>
                        <Text style={[styles.name_text,{fontWeight:'bold',paddingRight:10,}]}>Kumar Pratik</Text>
                        <Text style={styles.name_text}>Reacted your post </Text>
                    </View>
                </Body>
                <Right style={styles.Right}><Text style={styles.time_text}>3:43 pm</Text></Right>
                </ListItem>
                 </List>
               </ScrollView>
           </View>
    </View>
    );
}
const styles = StyleSheet.create({
ScrollView:{
},
Header:{

},
Body:{
    flex:1,
backgroundColor:colors.white,
},
List:{
marginTop:0,
marginBottom:50,
marginLeft:10,
paddingHorizontal:10,
backgroundColor:colors.white,
},
ListItem:{
  backgroundColor:colors.white,
  marginLeft:0,
  borderBottomWidth:0.5,
  borderBottomColor:colors.white1,
  paddingVertical:4,
  
},
list_body:{
borderBottomWidth:0,

},
thumbnail_image:{
    width:35,
    height:35
},
Left:{
},
Right:{
    borderBottomWidth:0,
},
name_text_con:{
    flexDirection:'row',
    alignItems:'center'
},
name_text:{
    color:colors.blac2,
    fontFamily:fonts.PrimaryFont,
},
comment_text:{
    color:colors.white5,
    fontFamily:fonts.PrimaryFont,
    fontSize:14
},
time_text:{
    paddingLeft:10,
    color:colors.white4,
    fontFamily:fonts.PrimaryFont,
    fontSize:13,
    alignSelf:'center',
},
Footer:{
    width: '100%',
    height: 40,
    backgroundColor: colors.white1,
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    paddingHorizontal:0,
},
});