import React from 'react';
import { View ,ScrollView,Dimensions} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
function Shimmer() {
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
                <View>
                    <View style={{ marginTop: 6, width: DeviceWidth, height: 200, borderRadius: 4 }} />
                    <View style={{ marginTop: 6, width: DeviceWidth-50, height: 10, borderRadius: 4 }} />
                    <View style={{ marginTop: 6, width: DeviceWidth-100, height: 10, borderRadius: 4 }} />  
                </View>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 80, height: 12, borderRadius: 4 }} />
                    </View>
            
            </View>
                <View>
                    <View style={{ marginTop: 6, width: DeviceWidth, height: 200, borderRadius: 4 }} />
                    <View style={{ marginTop: 6, width: DeviceWidth-50, height: 10, borderRadius: 4 }} />
                    <View style={{ marginTop: 6, width: DeviceWidth-100, height: 10, borderRadius: 4 }} />  
                </View>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
            <View style={{ flexDirection: "row", alignItems: "center",marginTop:20,marginLeft:10}}>
                <View style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 12, borderRadius: 4 }} />
                        <View style={{ marginTop: 6, width: 80, height: 12, borderRadius: 4 }} />
                    </View>
            
            </View>
                <View>
                    <View style={{ marginTop: 6, width: DeviceWidth, height: 200, borderRadius: 4 }} />
                    <View style={{ marginTop: 6, width: DeviceWidth-50, height: 10, borderRadius: 4 }} />
                    <View style={{ marginTop: 6, width: DeviceWidth-100, height: 10, borderRadius: 4 }} />  
                </View>
        </SkeletonPlaceholder>
</ScrollView>
    );
}

export default Shimmer;