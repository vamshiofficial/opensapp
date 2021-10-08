import React from 'react';
import { StyleSheet, Text, View,Image, Dimensions,StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab,Accordion,Content,Button} from 'native-base';
import { Shadow ,Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';
//----------
//----------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
//-----------
import colors from '../../components/styles/colors';
import fonts from '../../components/styles/fonts';
//-----------
//------------
//-----redux
import { connect, useSelector } from 'react-redux';
//----redux
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
export default function Profile_info(props) {
    const User = useSelector((state) => state.userState.currentUser);
    if(User == undefined) {
              return(
                  <View />
        )
    }
  //  const [expanded, setExpanded] = React.useState(true);
  //  const handlePress = () => setExpanded(!expanded);
    const dataArray = [
        { title: "First Element", content: "Lorem ipsum dolor sit amet" },
        { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
        { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
      ];
    return (
     <View style={{alignItems:'center'}}>
         <Image 
            source={{uri: User[0].image_source}}
            style={styles.ProfileImage} />
           
                <View style={styles.profile_name_con}>
                    <Text style={styles.fname_text}>{User[0].fname}</Text> 
                    <Text style={styles.uname_text}>@{User[0].username}</Text> 
                </View>
                
            <View style={styles.Profile_connect_container}>
            <View style={{width:'75%',paddingLeft:20,justifyContent:'center'}}>
                <TouchableOpacity style={styles.profile_info_con}>
                    <Text style={styles.profile_info_count_num_text}>{User[0].posts}</Text>
                    <Text style={styles.profile_info_count_text}>Posts</Text>
                </TouchableOpacity>
                <View style={styles.profile_info_con}>
                    <Text style={styles.profile_info_count_num_text}>{User[0].network}</Text>
                    <Text style={styles.profile_info_count_text}>Network</Text>
                </View>
                <View style={styles.profile_info_con}>
                    <Text style={styles.profile_info_count_num_text}>{User[0].connections}</Text>
                    <Text style={styles.profile_info_count_text}>Connections</Text>
                </View>
            </View>
                <View style={styles.profile_update_con}>
                    <TouchableOpacity style={styles.profile_update_btn}>
                                <Text style={styles.profile_update_btn_text}>Connected</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={[styles.profile_update_btn,{borderColor:colors.white5}]}>
                                <Text style={[styles.profile_update_btn_text,{color:colors.white5}]}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.profile_update_btn,{borderColor:colors.white5}]}>
                                <Text style={[styles.profile_update_btn_text,{color:colors.white5}]}>Settings</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
     </View>
    );
}
const styles = StyleSheet.create({
    profile_update_con:{
        paddingRight:10,
        paddingLeft:5,
        justifyContent:'center',
        marginTop:0,
        borderLeftWidth:1,
        borderLeftColor:colors.bglight,
       
    },
    ProfileImage:{
        width:DeviceWidth/100*30,
        height:DeviceWidth/100*30,
        borderColor:colors.secondary,
        borderWidth:5,
        borderRadius:100,
        alignSelf:'center',
        marginTop:-90,
        backgroundColor:colors.secondary
       },
       profile_update_btn:{
        paddingVertical:0,
        borderWidth:0.2,
        borderColor:colors.secondary,
        width:undefined,
        paddingHorizontal:15,
        alignItems:'center',
        borderRadius:25,
        marginHorizontal:5,
        marginVertical:5,
        backgroundColor:colors.white
    },
    profile_update_btn_account:{
        paddingVertical:0,
        borderWidth:0.3,
        borderColor:colors.black1,
        width:undefined,
        paddingHorizontal:15,
        alignItems:'center',
        borderRadius:25,
        marginTop:10,
        marginHorizontal:5,
        backgroundColor:colors.white
    },
    profile_update_btn_text:{
        color:colors.secondary,
        fontFamily:fonts.PrimaryFont
    },
    Profile_connect_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:DeviceWidth/100*95,
        alignSelf:'center',
        borderColor:colors.bglight,
        borderWidth:1,
        paddingHorizontal:5,
        paddingVertical:10,
        marginTop:20,
        borderRadius:2
    },
    profile_info_con:{
     flexDirection:'row',
    },
    profile_info_count_text:{
        fontFamily:fonts.PrimaryFont,
        color:colors.white4
    },
    profile_info_count_num_text:{
        color:colors.black3,
        fontFamily:fonts.PrimaryFont,
        fontSize:15,
        paddingRight:10,
        width:40,
        fontWeight:'300'
        
    },
    profile_name_con:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    fname_text:{
        fontFamily:fonts.PrimaryFont
    },
    uname_text:{
        fontFamily:fonts.PrimaryFont,
        color:colors.white5
    }
})
