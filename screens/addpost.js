import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, View,StatusBar, ScrollView,BackHandler,Button } from 'react-native';
import { Form, Item,Text, Input, Label,Picker } from 'native-base';
import {Fab } from 'native-base';
//---------------
import colors from '../components/styles/colors';
import fonts from '../components/styles/fonts';
//---------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
//-----------
//---------------
export default class AddpostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false,
          selected2: undefined
        };
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
      render(){
        return(
      
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.secondary} />
            <View style={styles.BodyTop}>
                <View style={styles.bodytop_header}>
                  <TouchableOpacity style={styles.bodytop_header_backBtn}
                  ><FeatherIcon name="chevron-left" style={{fontSize:22,color:colors.white}} /></TouchableOpacity>
                  <TouchableOpacity style={styles.bodytop_header_submit}><Text style={styles.top_btn_text}>OpenThis</Text></TouchableOpacity>
                </View>
                <View style={styles.bodytop_body}>
                    <Text style={styles.bodytop_body_text}>
                      Open your thoughts and feels with the world.Your every post will make some sound about you.
                    </Text>
                </View>
            </View>
            <View style={styles.Body}>
              <ScrollView>
              <Item>
                <IonIcon active name='home' />
                    <Input
                    placeholderTextColor={colors.white2}
                    style={[styles.TextInput,{minHeight:100}]} 
                    multiline
                    placeholder="Write your Thoughts or Feels right now..."
                    />
              </Item>
              <Item>
                  <IonIcon active name='home' />
                  <Input
                    placeholderTextColor={colors.white2} 
                  style={[styles.TextInput,{marginTop:20}]}
                    placeholder="Url (optional)"
                    />
              </Item>
               
            <Item picker style={styles.ItemPicker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={styles.picker}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="How do feel about this post?" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
            <View style={styles.submit_container}>
                <TouchableOpacity 
                title="Open this"
                name="sdfsd"
                style={styles.submit}
                >
                  <Text style={styles.submit_Text}>Opens This</Text>
                </TouchableOpacity>
            </View>
              </ScrollView>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
   container:{
       flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   BodyTop:{
    backgroundColor:colors.secondary,
    marginTop:StatusBar.currentHeight,
    height:200,
    width:'100%',
    alignItems:'center',
    marginTop:-17,
   },
   bodytop_header:{
    height:50,
    width:'100%',
    marginTop:30,
    backgroundColor:colors.secondary,
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   bodytop_header_submit:{
    paddingHorizontal:20,
    paddingVertical:7,
    borderRadius:25,
    borderColor:colors.white,
    borderWidth:0.3
   },
   bodytop_body:{
    backgroundColor:colors.secondary,
    width:'100%',
    paddingHorizontal:25,
    paddingVertical:20,
   },
   bodytop_body_text:{
    fontSize:18,
    color:colors.white3,
    fontFamily:fonts.PrimaryFont,
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
   },
   TextInput:{
     flex:1,
     width:'90%',
     padding:10,
     borderRadius:2,
     marginTop:50,
     marginHorizontal:'5%',
     backgroundColor:colors.white,
     fontFamily:fonts.PrimaryFont,
    
     shadowOpacity: 0.1,
     shadowRadius: 8.65,
   },
   ItemPicker:{
    width:'90%',
    padding:2,
    borderRadius:2,
    marginTop:50,
    marginLeft:'5%',
    backgroundColor:colors.white,
    color:'red',
    shadowColor: colors.black8,
    fontFamily:fonts.PrimaryFont,
     borderBottomWidth:1,
     borderBottomColor:colors.white1
  },
  picker:{
    color:colors.white3
  },
  submit_container:{
    paddingRight:21,
    marginTop:20,
    paddingVertical:30
  },
  submit:{
    backgroundColor:colors.secondary,
    height:40,
    alignSelf:'flex-end',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    borderTopRightRadius:0,
    paddingHorizontal:25,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
     elevation:5,
  },
  submit_Text:{
    color:colors.white,
    fontWeight:'700',
    textTransform:'uppercase',
    fontFamily:fonts.PrimaryFont,
  },
  top_btn_text:{
    fontFamily:fonts.PrimaryFont,
    color:colors.white,
  }
});