import React, { Component,useState,useEffect,useRef} from 'react';
import { Image, TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View,ListItem, Item } from 'native-base';
import RenderHtml from "react-native-render-html";
//----------------
import IIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { BottomSheet } from 'react-native-btr';
import IonIcon from 'react-native-vector-icons/Ionicons';
//---------------
import fonts from '../../components/styles/fonts';
import colors from '../../components/styles/colors';
import Posts from '../profile/posts';
import ImageLoader from './img_loader';
import { color } from 'react-native-reanimated';
//--------------
//-------------from fnctions
//import Make_username from './functions';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

// ------------------
const ImagePost = (props) => {
  const {posts,id,user_id} = props;
  const navigation = id;
  const[post,Set_Post]=useState(props.post)
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  const OnLikeHandler = () => {
    const do_like = post.user_liked?1:-1;
    const do_action = post.user_liked?'like_post_action':'dis_like_post_action';
    Set_Post({
      ... post,
      total_likes:post.total_likes+do_like,
      user_liked:(!post.user_liked)
    })
    var InsertAPIURL='https://esigm.com/opens/app_files/insert.php';
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };    
    var Data = {
        action:do_action,
        user_id:user_id,
        post_id:post.opens_post_id,
    };
    fetch(InsertAPIURL,
        {
        method:'POST',
        headers:headers,
        body: JSON.stringify(Data)
    }
    )
    .then((response)=>response.json())
  }
    return (
      <View style={{marginBottom:0,padding:0,margin:0}} key={post.opens_post_id}>
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <View style={{flex: 1,justifyContent:'center'}}>
               <View style={{paddingVertical:0,width:DeviceWidth/100*95}}>
               <ListItem>
                <Text style={[styles.FontFamily,styles.bottom_sheet_list_text]}
                 onPress={() => navigation.navigate('Post_Details' ,{itemData:post})}
                >View post</Text>
                </ListItem>
                <ListItem>
                  <Text style={[styles.FontFamily,styles.bottom_sheet_list_text]}>Lee Allen</Text>
                </ListItem>
                <ListItem>
                  <Text style={[styles.FontFamily,styles.bottom_sheet_list_text]}>Caroline Aaron</Text>
                </ListItem>
               </View>
              </View>
            </View>
          </View>
        </BottomSheet>
        
          <Card style={styles.post_card}>
            <CardItem style={styles.card_item}>
              <Left style={{flexDirection:'row'}}>
               <Thumbnail 
                source={{uri: post.image_source}} 
                style={styles.user_profile_img} />
                <Body style={{justifyContent:'center'}}>
                  <Text style={[styles.FontFamily,styles.username_text]} note
                  onPress={() => navigation.navigate('Profile' ,{navigation:navigation,user_id:post.user_id})}
                  > {post.username}</Text>
              
                </Body>
              </Left>
              <Right>
                  <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.BottomSheet_touch}>
                  <IonIcon name="chevron-down-outline" style={{fontSize:17,color:colors.white3}} />
                  </TouchableOpacity>
              </Right>
            </CardItem>
            <CardItem cardBody style={styles.card_item}>
              {/* <Image source={{uri: `https://esigm.com/opens/uploads/images/${post.post_image}`}} style={styles.post_image}/> */}
              <ImageLoader 
              defaultImageSource={require('../../assets/images/default_Image.png')}
              ImageSource={{uri: `https://esigm.com/opens/uploads/images/${post.post_image}`}}
              style={styles.post_image}
              resizeMode="cover"
              />
            </CardItem>
            <Text style={styles.post_caption_text}>
              {post.post_caption}</Text>
            <Text style={[styles.FontFamily,styles.post_time]}>{post.post_time}</Text>
            <CardItem style={{margin:0,height:50}} Icon>
              <Left>
                <Text style={[styles.FontFamily,styles.post_reaction_text]}>
                  {post.total_likes} Likes <IIcon name="circle-small" />
                  {post.total_comments} Comments | {post.user_liked }
                </Text>
              </Left>
             
              <Right style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>OnLikeHandler()}>
                    <IIcon name="heart-outline" style={[styles.reaction_icon,{color:post.user_liked ? 'black':'red',paddingRight:25}]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Comments_list' ,{itemData:post.opens_post_id})} >
                    {/* <FeatherIcon name="message-square" style={styles.reaction_icon} /> */}
                    <IonIcon name="chatbox-outline" style={styles.reaction_icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <IonIcon name="bookmark-outline" style={styles.reaction_icon} />
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
       
      </View>
    );
}
export default ImagePost;
const styles = StyleSheet.create({
  bottomNavigationView: {
   backgroundColor: '#fff',
   width: '100%',
   height: DeviceHeight/100*30,
   justifyContent: 'center',
   alignItems: 'center',
 },
 post_card:{
elevation:0,
borderColor:colors.white,
borderBottomColor:colors.bglight,
borderBottomWidth:7,
padding:0,
paddingBottom:5,
 },
 card_item:{
   paddingTop:0,
   marginTop:0
 },
 FontFamily:{
   fontFamily:fonts.PrimaryFont,
 },
 bottom_sheet_list_text:{
   color:colors.white5,
 },
 username_text:{

 },
 username_note_text:{

 },
 post_time:{
fontSize:12,
borderBottomWidth:0.2,
borderBottomColor:colors.white1,
paddingLeft:15,
paddingBottom:2,
color:colors.white3
 },
 user_profile_img:{
   width:30,
   height:30,
   backgroundColor:colors.bglight
 },
 post_image:{
  height: DeviceWidth, 
  width:DeviceWidth/100*99,
  backgroundColor:colors.white
 },
 post_caption_text:{
  color:colors.white5,
  fontFamily:fonts.PrimaryFont,
  paddingHorizontal:10,
 },
 post_reaction_text:{
   color:colors.white3,
   fontSize:12
 },

 reaction_icon:{
  fontSize:20,
  color:colors.white5,
  paddingRight:5
 },
 BottomSheet_touch:{
   padding:10,
   borderRadius:50,
 }
});