import React, {useEffect, useState} from 'react';
import { StyleSheet,Alert, Text, View,Image, Dimensions,StatusBar, TouchableOpacity, ScrollView, TextInput,FlatList,ActivityIndicator } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab ,Left, Body, Right, Title, Subtitle,Button, List, ListItem,Thumbnail,Footer } from 'native-base';
//----------
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
import Comment_Follow_Shimmer from '../../screens/items/comment_follow_shimmer';
//------------
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
//-----redux
import { connect, useSelector } from 'react-redux';
//---
export default function Comments_list({navigation,route}){
    const post = route.params.itemData;
    const[loading,SetLoading] = useState(true)  
    const[dataLoading,SetDataLoading] = useState(false)
    const[data,SetData] = useState([])
    const[loadtime,setloadtimelimit] = useState(false)
    const[pageCurrent,setPageCurrent] = useState(1)
    const[total_comments,Set_total_comments] = useState(true)
    const[total_comments_count,Set_total_comments_count] = useState('')
    const[lastpage_reached,Setlastpage_reached] = useState(false)
    const[CommentTextInput,SetCommentTextInput] = useState('')
    const[commentPosted,SetcommentPosted] = useState(false)
    // ==============================use effect
    const User = useSelector((state) => state.userState.currentUser);
    if(User == undefined) {
              return(
                  <View />
        )
    }
    useEffect(()=>{
        if(!lastpage_reached){
            fetchdata()
        }
    },[pageCurrent,commentPosted])
    // ==============================load data

     const fetchdata = async() => {
        SetDataLoading(true)
         // console.log('fetch data')
         //---more comments 1535
         const apiURL = `https://esigm.com/opens/app_files/comments?post_id=${post}&_page=`+pageCurrent;
         fetch(apiURL).then((res)=>res.json())
         .then((resJson) => {
            if(resJson[0].total_comments === 0){
                Set_total_comments_count(resJson[0].total_comments)
                Set_total_comments(false)
                Setlastpage_reached(true)
            }
            else{
                Set_total_comments_count(resJson[0].total_comments)
                Set_total_comments(true)
                if(resJson[0].total_pages === pageCurrent){
                    SetData(data.concat(resJson))
                    Setlastpage_reached(true)
                    
                }
                else{
                    SetData(data.concat(resJson))
                    Setlastpage_reached(false)
                }
            }
            
                })
     }

      // ==============================render footer data
      const RenderFooter = () => 
      {
          return(
                  dataLoading ?
                <View style={{paddingVertical:30,marginBottom:50}}>
                      {
                          lastpage_reached?
                          <Text style={styles.only_text}>No more comments</Text>
                          :
                      <ActivityIndicator animating={true} size="large" style={{opacity:1,}} color={colors.secondary}  />
                      }
                </View>
                  :
                  null
          )
      }
      // ==============================load more data
      const HandleLoadMore = () => {
          SetDataLoading(true)
          setPageCurrent(pageCurrent+1)
          console.log('HandleLoadMore + page num ' + pageCurrent)
      }
      // ==============================load return
      // ==============================load for shimmer
        setTimeout(function(){setloadtimelimit(true)}, 1000);
        if (loadtime){
            if(loading){
                SetLoading(false)
            }
        }
    //--------
    const HandlePostComment = () => {
        
        if(CommentTextInput.length==0)
         {
            Alert.alert('Inputs missing','Please enter comment',[{text:'Okay'}]);
            return;
         }
         else{
            let action = "";
            let post_id ="";
            let cmnt_data = "";
            let user_id="";
          
           

                    var InsertAPIURL='https://esigm.com/opens/app_files/insert.php';
                    var headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    };
            
                    var Data = {
                        action:'post_this_cmnt',
                        post_id:post,
                        cmnt_data:CommentTextInput,
                        user_id:User[0].id
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
                            if(RES[0].reply_msg == "POSTED_SUCCESSFULL"){
                                SetCommentTextInput('')
                                SetcommentPosted(true)
                                alert("coment upload result"+RES[0].reply_msg);
                            }
                            else{
                                alert("coment upload result fail:");
                            }
                            
                        })
            }
        }
    //===================== comment style goes here
    const Comment_style = (props) => {
        //const CommentsData = props;
        return (
            <>
             <List style={styles.List}>
                        <ListItem avatar style={styles.ListItem}>
                        <Left>
                            <Thumbnail source={{ uri: props.CommentsData.image_source }} style={styles.thumbnail_image} />
                        </Left>
                        <Body style={styles.list_body}>
                            <View style={styles.name_text_con}>
                                <Text style={styles.name_text}>{props.CommentsData.username}</Text>
                                <Text style={styles.time_text}>{props.CommentsData.post_time} </Text>
                            </View>
                            <Text style={styles.comment_text}>{props.CommentsData.post_comment}
                            </Text>
                        </Body>
                        <Right style={styles.Right}></Right>
                        </ListItem>
                    </List>
            </>
        );
    }
    return(
    <View style={{flex:1}}>
           <View style={styles.Header}>
                <Header
                    androidStatusBarColor={colors.secondary}
                    transparent
                    style={{height:70}}
                    >
                    <Left>
                        <Button transparent onPress={ () => { navigation.goBack() }}>
                        <FeatherIcon name="chevron-left" style={{fontSize:22,color:colors.black}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:colors.black,fontFamily:fonts.PrimaryFont,fontSize:15,fontWeight:'200'}}>Comments {total_comments_count} </Title>
                    </Body>
                    <Right></Right>
                </Header>
           </View>
           <View style={styles.Body}>
                        {loading ? 
                           <Comment_Follow_Shimmer />
                                    :
                                <View style={{paddingBottom:40,flex:1}}> 
                                    {
                                        total_comments ?
                                        <FlatList 
                                            data={data}
                                            renderItem = {({item}) => <Comment_style CommentsData={item} />}
                                            keyExtractor={
                                                (item, index) =>
                                                item.cmnt_id + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()
                                            }
                                            ListFooterComponent={RenderFooter}
                                            onEndReached={HandleLoadMore}
                                            onEndReachedThreshold={0}
                                            showsVerticalScrollIndicator={false}
                                        />
                                            :
                                            <View style={{flex:1,justifyContent:'center',alignItems:'center', padding:0}}>
                                                <Text style={styles.only_text}>No Comments Yet!</Text>
                                            </View>
                                    }
                            </View>
                        }
           </View>
            <View style={styles.Footer}>
                <View style={{padding:0,margin:0,width:40,justifyContent:'center',alignItems:'center'}}>
                    <Thumbnail source={{ uri: User[0].image_source }} style={[styles.thumbnail_image,{paddingEnd:0,width:25,height:25}]} />
                </View>
                <View style={{flex:1}}>
                    <TextInput
                        style={styles.text_input}
                        placeholder={User[0].username}
                        onChangeText={(val)=>SetCommentTextInput(val)}
                        value={CommentTextInput}
                    />
                </View>
                <TouchableOpacity 
                    onPress={()=>HandlePostComment()}
                    style={{width:40,justifyContent:'center',alignItems:'center',backgroundColor:colors.white1}}>
                    <FeatherIcon name="arrow-up" style={{fontSize:20,color:colors.black,}} />
                </TouchableOpacity>
            </View>
           
    </View>
    );
}
const styles = StyleSheet.create({
ScrollView:{
},
Header:{
backgroundColor:colors.bglight,
padding:0,
},
Body:{
flex:1,
backgroundColor:colors.white,
},
List:{
marginTop:0,
marginBottom:0,
marginLeft:10,
paddingHorizontal:10,
backgroundColor:colors.white,
},
ListItem:{
  backgroundColor:colors.white,
  padding:0,
  marginLeft:0,
},
list_body:{
backgroundColor:colors.white,
borderBottomColor:colors.bglight,
borderBottomWidth:1
},
thumbnail_image:{
    width:35,
    height:35
},
Right:{
    borderBottomColor:colors.white1
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
    fontSize:12
},
Footer:{
    width: '100%',
    height: DeviceHeight/100*7,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    paddingHorizontal:0,
    borderTopColor:colors.bglight,
    borderTopWidth:2
},
 thumbnail_image:{
        width:35,
        height:35,
        backgroundColor:colors.bglight
    },
    Right:{
        borderBottomColor:colors.bglight,
        borderBottomWidth:0.1
    },
    name_text_con:{
        flexDirection:'row',
        alignItems:'center'
    },
    name_text:{
        color:colors.blac2,
        fontFamily:fonts.PrimaryFont,
        fontSize:12
    },
    comment_text:{
        color:colors.white5,
        fontFamily:fonts.PrimaryFont,
        fontSize:12
    },
    time_text:{
        paddingLeft:10,
        color:colors.white4,
        fontFamily:fonts.PrimaryFont,
        fontSize:12
    },
    only_text:{
        color:colors.white4,
        fontFamily:fonts.PrimaryFont,
        textAlign:'center'  
    },
    text_input:{
        fontFamily:fonts.PrimaryFont,
    }
});