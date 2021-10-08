import React from 'react';
import { View,Text,StyleSheet,Animated,Image } from 'react-native';
import colors from '../../components/styles/colors';

defaultImganimated = new Animated.Value(0);
Imganimated = new Animated.Value(0);

handleDefaultImageLoad = () => {
    Animated.timing(this.defaultImganimated,{
        toValue:1,
        useNativeDriver:true
    }).start();
}   
handleImageLoad = () => {
    Animated.timing(this.Imganimated,{
        toValue:1,
        useNativeDriver:true
    }).start();
} 
//-------------------------------------
class ImageLoader extends React.Component {
    render(){
    const {defaultImageSource,ImageSource,style, ...props} = this.props;
    return (
        <View>
            <Animated.Image
            {...props}
            source={defaultImageSource}
            style={[style,{opacity:this.defaultImganimated}]}
            onLoad={this.handleDefaultImageLoad}
            blurRadius={3}
            />
             <Animated.Image
            {...props}
            source={ImageSource}
            style={[style,{opacity:this.Imganimated},styles.imageOverlay]}
            onLoad={this.handleImageLoad}
            />
        </View>
    );
    }
}

export default ImageLoader;
const styles = StyleSheet.create({
    imageOverlay:{
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
         }
})