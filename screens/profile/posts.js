import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions,StatusBar, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
//----------
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
//-----redux
import { connect, useSelector } from 'react-redux';
import ImagePost from '../items/imagepost';
//----redux
//---

const Posts = ({id}) => {
    const navigation = id;
    const counter = useSelector((state) => state.userState.UserProfilePosts);
    if(counter == undefined) {
                return(
                    <View />
                )
        }
    return(
      
                                <FlatList 
                                    nestedScrollEnabled={true}
                                    data={counter}
                                    horizontal={false}   
                                    //renderItem={({item}) => <Post_ post={item} />}
                                   renderItem = {({item}) => <ImagePost post={item} id={navigation} />}
                                    // keyExtractor={(data) => `item.opens_post_id${data.opens_post_id}`}
                                    //keyExtractor={(item, index) =>`key-${item.opens_post_id+index}`}
                                    keyExtractor={
                                        (item, index) =>
                                        item.opens_post_id + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()
                                    }
                                    // ListFooterComponent={RenderFooter}
                                    // onEndReached={HandleLoadMore}
                                    // onEndReachedThreshold={0}
                                    showsVerticalScrollIndicator={false}
                                />
       
    );
}
export default Posts;