import React, {Component, useState} from 'react';
import { StyleSheet, View ,Dimensions,StatusBar, TextInput,Keyboard, Image} from 'react-native';
import { Container, Header,Text, Tab, Tabs, ScrollableTab,TabHeading } from 'native-base';
//----------------------------
import colors from '../components/styles/colors';
import fonts from '../components/styles/fonts';

//----------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
//----------------------------
import * as Animatable from 'react-native-animatable';
import { Row } from 'native-base';
//----------------------------
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
//----------------------------
import SearchUsers from './search/users'; 
import SearchPosts from './search/posts';
import { color } from 'react-native-reanimated';
class SearchPage extends Component{
    state = {
        searchBarFocued:false
    }
    componentDidMount(){
        this.KeyboardDidShow = Keyboard.addListener('keyboardDidShow',this.KeyboardDidShow);
        this.KeyboardWillShow = Keyboard.addListener('keyboardWillShow',this.KeyboardWillShow);
        this.KeyboardWillHide = Keyboard.addListener('keyboardWillHide',this.KeyboardWillHide);
        this.KeyboardDidHide = Keyboard.addListener('keyboardDidHide',this.KeyboardDidHide);
    }
    // android
    KeyboardDidShow = () => {
        this.setState({searchBarFocued:true})
    }
    KeyboardDidHide = () => {
        this.setState( {searchBarFocued:false })
    }
    // ios
    KeyboardWillShow = () => {
        this.setState({searchBarFocued:true})
    }
    KeyboardWillHide = () => {
        this.setState({searchBarFocued:true})
    }
    
    render(){
        const SearchContent = () =>{
            if (this.state.searchBarFocued) {
               return(
                <Text style={styles.only_text}>
                <Image 
                source={{
                    uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
                  }}
                style={{width:80,height:40}} />
                    The search results will show here
                </Text>  
               );
             }
             else{
                return(
                    <Text style={styles.only_text}>noo</Text>
                );
             }
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.SW10} />
                <View style={styles.BodyTop}>
                    <Animatable.View style={styles.search_input_box} animation="slideInUp" duration={500} >
                        <FeatherIcon name='search'style={{fontSize:20,color:colors.white5}} />
                        <TextInput 
                        style={styles.search_input}
                        placeholder='Search Users / Posts'
                        />
                    </Animatable.View>
                    
                </View>
                <View style={[styles.Body,{
                    marginTop:this.state.searchBarFocued ? 0 : -17,
                    borderTopLeftRadius:this.state.searchBarFocued ? 0 : 25,
                    borderTopRightRadius:this.state.searchBarFocued ? 0 : 25
                    }]}>
                <SearchContent />
                <View style={styles.tabsView}>
                {/* <Tabs
                tabBarBackgroundColor={colors.secondary}
                tabBarUnderlineStyle={{backgroundColor:colors.black,height:0}}
                tabBarPosition="bottom"
                >
                    <Tab 
                    TabStyle={styles.tabStyle}
                    activeTabStyle={{backgroundColor:colors.white}}
                    activeTextStyle={{fontWeight:'bold',color:colors.black}}
                    textStyle={{fontFamily:fonts.PrimaryFont,color:colors.white5}}
                    heading="Posts">
                        <SearchPosts />
                    </Tab>
                    <Tab
                    TabStyle={styles.tabStyle}
                    activeTabStyle={{backgroundColor:colors.white}}
                    activeTextStyle={{fontWeight:'bold',color:colors.black}}
                    textStyle={{fontFamily:fonts.PrimaryFont,color:colors.white5}}
                     heading="Users">
                        <SearchUsers />
                    </Tab>
                </Tabs> */}
                    </View>
                </View>
        </View>
    );
}
}
export default SearchPage;
const styles = StyleSheet.create({
   container:{
    justifyContent:'center',
    alignItems:'center',
   flex:1
   },
   BodyTop:{
    backgroundColor:colors.SW10,
    //height:DeviceHeight/ 100 * 15,
    marginTop:StatusBar.currentHeight,
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:-17,
   },
   Body:{
    backgroundColor:colors.white,
    //height:DeviceHeight/ 100 * 95,
    width:'100%',
    flex:4,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    marginTop:-17,
    paddingTop:0,
    justifyContent:'center',
    alignItems:'center'
   },
   bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search_input_box:{
    width:DeviceWidth/100*90,
    marginHorizontal:DeviceWidth/100*5,
    backgroundColor:colors.white,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:25,
    paddingHorizontal:25,
    fontFamily:fonts.PrimaryFont,
  },
  search_input:{
      borderRadius:25
  },
  tabsView:{
    flex:1,
    width:DeviceWidth,
    height:40,
  },
  underlineStyle:{
      backgroundColor:'#333',
      borderColor:'red',
      height:1
  },
  tabs:{
      backgroundColor:'red'
  },
  only_text:{
      fontFamily:fonts.PrimaryFont,
  }
});