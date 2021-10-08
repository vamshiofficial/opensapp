import React from 'react';
import { Image, ScrollView, Text, View,StyleSheet,Dimensions } from 'react-native';
import ImageLoader from './img_loader';
//----------------
import IIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { BottomSheet } from 'react-native-btr';
import IonIcon from 'react-native-vector-icons/Ionicons';
//---------------
import fonts from '../../components/styles/fonts';
import colors from '../../components/styles/colors';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const Post_Details = ({route,navigation}) => {
    const post = route.params.itemData;
    navigation.setOptions({ tabBarVisible: false })
    return (
       <ScrollView style={{marginTop:0}}>
             <View style={styles.image_container}>
             <ImageLoader 
              defaultImageSource={require('../../assets/images/default_Image.png')}
              ImageSource={{uri: `https://esigm.com/opens/uploads/images/${post.post_image}`}}
              style={styles.post_image}
              resizeMode='contain'
              />
             </View>
       </ScrollView>
    );
}

export default Post_Details;
const styles = StyleSheet.create({

    image_container:{
        height:DeviceWidth,
        width:DeviceWidth,
       },
       post_image:{
       backgroundColor:colors.white
       }
})