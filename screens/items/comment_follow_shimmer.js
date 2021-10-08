import React from 'react';
import { View ,ScrollView,Dimensions} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
function Comment_Follow_Shimmer() {
    return (
        <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center'}}>    
        <SkeletonPlaceholder>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 80, height: 12, borderRadius: 4 }} />
                    </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width:DeviceWidth-100, height: 12, borderRadius: 4 }} />
                    </View>
            </View>  
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 80, height: 12, borderRadius: 4 }} />
                    </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width:DeviceWidth-100, height: 12, borderRadius: 4 }} />
                    </View>
            </View> 
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 80, height: 12, borderRadius: 4 }} />
                    </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width:DeviceWidth-100, height: 12, borderRadius: 4 }} />
                    </View>
            </View> 
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 80, height: 12, borderRadius: 4 }} />
                    </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width:DeviceWidth-100, height: 12, borderRadius: 4 }} />
                    </View>
            </View> 
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 100, height: 12, borderRadius: 4 }} />
                    </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width:DeviceWidth-100, height: 12, borderRadius: 4 }} />
                    </View>
            </View> 
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 150, height: 12, borderRadius: 4 }} />
                    </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width:DeviceWidth-100, height: 12, borderRadius: 4 }} />
                    </View>
            </View>  
        </SkeletonPlaceholder>
       
</ScrollView>
    );
}

export default Comment_Follow_Shimmer;