import React, { Component,useEffect, useState } from 'react';
import { View,StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//-------------
import {DrawerContentScrollView, DrawerContentScrollview,DrawerItem} from '@react-navigation/drawer';
import { Container,Text, Header, Content, Button, ListItem, Icon, Left, Body, Right, Switch, Thumbnail,List,Drawer } from 'native-base';
import IIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import {AuthContext} from '../../components/context';
//-----redux
import { connect, useSelector } from 'react-redux';
import fonts from '../styles/fonts';
//----redux
export function DrawerContent({props,navigation}){
    const User = useSelector((state) => state.userState.currentUser);
    if(User == undefined) {
              return(
                  <View />
        )
    }
    const DeviceHeight = Dimensions.get('window').height;
    const {signOut,userToken} =  React.useContext(AuthContext);
    return(
        <View style={{flex:1}}>
        <Content>
            <View style={styles.TopDrawerSection}>
            <ListItem avatar style={{padding:0}}>
              <Left>
                <Thumbnail source={{ uri:User[0].image_source }} style={{width:50,height:50}} />
              </Left>
              <Body style={{borderBottomWidth:0,paddingTop:15}}>
                <Text style={styles.fname_text}>{User[0].fname} </Text>
                <Text style={styles.username_text}>@{User[0].username}</Text>
              </Body>
            </ListItem>
            </View>
            <DrawerContentScrollView> 
            <View style={{paddingTop:20}} />
            {/* list of navs */}
        
                <ListItem icon onPress={()=>alert('sdasd')}>
                    <Left> 
                        <IIcon active name="card-text-outline" style={styles.icon} />
                    </Left>
                    <Body  style={styles.body}>
                    <Text style={styles.text}>Feed</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={()=>alert('sdasd')}>
                    <Left> 
                        <FeatherIcon active name="search" style={styles.icon} />
                    </Left>
                    <Body  style={styles.body}>
                    <Text style={styles.text}>Search</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={()=>alert('sdasd')}>
                    <Left> 
                        <FeatherIcon active name="award" style={styles.icon} />
                    </Left>
                    <Body  style={styles.body}>
                    <Text style={styles.text}>Rewards</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={()=>alert('sdasd')}>
                    <Left> 
                        <FeatherIcon active name="user" style={styles.icon} />
                    </Left>
                    <Body  style={styles.body}>
                    <Text style={styles.text}>Profile</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={()=>alert('sdasd')}>
                    <Left> 
                        <IIcon active name="account-check-outline" style={styles.icon} />
                    </Left>
                    <Body  style={styles.body}>
                    <Text style={styles.text}>Account</Text>
                    </Body>
                </ListItem>
                <ListItem icon onPress={()=>alert('sdasd')}>
                    <Left> 
                        <IonIcon active name="settings-outline" style={styles.icon} />
                    </Left>
                    <Body  style={styles.body}>
                    <Text style={styles.text}>Settings</Text>
                    </Body>
                </ListItem>
                
                
                </DrawerContentScrollView>
        </Content>
     
        <View style={styles.bottomDrawerSection}>
               
                <ListItem icon   onPress={() => signOut()}>
                    <Left> 
                        <IIcon active name="exit-to-app" style={styles.icon} />
                    </Left>
                    <Body  style={styles.body}>
                    <Text style={styles.text}>LogOut</Text>
                    </Body>
                </ListItem>
                
           </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
    },
    icon:{
        color:colors.white5,
        fontSize:20
    },
    body:{
        borderBottomWidth:0
    },
    text:{
        color:colors.white5,
        fontSize:15,
        fontFamily:fonts.PrimaryFont
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    TopDrawerSection:{
        paddingTop:50,
        paddingBottom:20,
        backgroundColor:colors.white1
    },
    fname_text:{
        fontFamily:fonts.PrimaryFont
    },
    username_text:{
        fontFamily:fonts.PrimaryFont,
        fontSize:10
    }
 });