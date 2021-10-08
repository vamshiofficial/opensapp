import React from 'react';
import { StyleSheet, Text, View ,Button,Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor= selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
    return (
        <View 
        style={{
            width:10,
            borderRadius:25,
            height:5,
            marginHorizontal:3,
            backgroundColor
        }}
        
        />
    )
}

const Skip = ({...props}) => (
    <TouchableOpacity style={{marginLeft:15,backgroundColor:'#fff',paddingHorizontal:15,paddingVertical:5,borderRadius:25}} {...props}>
     <Text>Skip</Text>
    </TouchableOpacity>
);
const Next = ({...props}) => (
    <TouchableOpacity style={{marginRight:15,backgroundColor:'#fff',paddingHorizontal:15,paddingVertical:5,borderRadius:25}} {...props}>
        <Text>Next</Text>
    </TouchableOpacity>
);
const Done = ({...props}) => (
    <TouchableOpacity style={{marginRight:15,backgroundColor:'#fff',paddingHorizontal:15,paddingVertical:5,borderRadius:25}} {...props}>
        <Text>Done</Text>
    </TouchableOpacity>
);
const OnBoardPage = ({navigation}) => {
    return(
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() =>  navigation.navigate('Root', { screen: 'Login' })}
        onDone={() =>  navigation.navigate('Root', { screen: 'Login' })}
            pages={[
                {
                backgroundColor: '#fff',
                image: <Image uri= 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-with-title.png' style={{width:150,height:150}} />,
                title: 'Welcome to opens',
                subtitle: 'We are honor to be with you here.if you are new to this opens platform click next button below to learn aboput this platform.If you know about it just skip button below to continue',
                },
                {
                backgroundColor: '#f1f1f1',
                image: <Image uri= 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-with-title.png'  style={{width:150,height:150}} />,
                title: 'Connect with similar people like you',
                subtitle: 'You can connect people who thinks,learning like you',
                },
                {
                backgroundColor: '#fff',
                image: <Image uri= 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-with-title.png'  style={{width:150,height:150}} />,
                title: 'Share Your Thoughts and Feels',
                subtitle: 'Opens is a very good and big platform to share your Thoughts and Feel',
                }
                
            ]}
            />
    );
}
export default OnBoardPage;