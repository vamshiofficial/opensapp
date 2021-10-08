import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Dimensions,StatusBar, TextInput,ScrollView,FlatList, ActivityIndicator, Image} from 'react-native';
import { Shadow ,Neomorph } from 'react-native-neomorph-shadows';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
//-----------
import colors from '../components/styles/colors';
import ImagePost from './items/imagepost';
import Shimmer from './items/shimmer';
//------------
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
//-----redux
import { connect, useSelector } from 'react-redux';
//---
/**
 * ----------------------
 *  ---------------------
 */
const TrendingPage = ({navigation}) => {
    const User = useSelector((state) => state.userState.currentUser);
    if(User == undefined) {
              return(
                User[0]=null
        )
    }
    const[loading,SetLoading] = useState(true)
    const[dataLoading,SetDataLoading] = useState(false)
    const[data,SetData] = useState([])
    const[loadtime,setloadtimelimit] = useState(false)
    const[pageCurrent,setPageCurrent] = useState(1)
    // ==============================use effect
    useEffect( ()=> {
        console.log('useeffect')
        console.log('use effect page current:',pageCurrent)
        fetchdata()
       // SetDataLoading(true)
        return () => {
          //  {data}
        }
    },[pageCurrent])
    // ==============================load data
        const fetchdata = async() => {
                let this_user = '';
                try {
                this_user = await AsyncStorage.getItem('userToken')
                }
                catch(e){
                    console.log(e)
                }
            //const apiURL = "https://jsonplaceholder.typicode.com/posts?_limit=5&_page="+pageCurrent;
            const apiURL = `https://esigm.com/opens/app_files/posts?_user_id=${this_user}&_limit=10&_page=`+pageCurrent;
            fetch(apiURL).then((res)=>res.json())
            .then((resJson) => {
                SetData(data.concat(resJson))
                //SetData(data.resJson)
                SetDataLoading(false)
               // console.log(resJson)
            })
        }
    // ==============================load for shimmer
        setTimeout(function(){setloadtimelimit(true)}, 1000);
        if (loadtime){
            if(loading){
                SetLoading(false)
            }
        }
        // ==============================render footer data
        const RenderFooter = () => 
        {
            return(
                    dataLoading ?
                    <View style={{paddingVertical:30,marginBottom:50,backgroundColor:colors.white3}}>
                        <ActivityIndicator animating={true} size="large" style={{opacity:1,}} color={colors.secondary}  />
                    </View>
                    :
                    null
            )
        }
        // ==============================load more data
        const HandleLoadMore = () => {
            SetDataLoading(true)
            setPageCurrent(pageCurrent+1)
            //console.log('HandleLoadMore + page num ' + pageCurrent)
           
        }
        // ==============================load return
    return(
        <View style={styles.container}>
        <StatusBar backgroundColor="#ee3758" />
                <View
                style={styles.BodyTop}>
                
                </View>
            <View>
                <Neomorph
                    darkShadowColor={colors.secondary}
                    lightShadowColor={colors.SD10}
                    style={styles.Body}>
                        {loading ? 
                           <Shimmer />
                                    :
                                <View style={{padding:0}}> 
                                <FlatList 
                                    data={data}
                                    //renderItem={({item}) => <Post_ post={item} />}
                                   renderItem = {({item}) => <ImagePost post={item} id={navigation} user_id={User[0].id} />}
                                    // keyExtractor={(data) => `item.opens_post_id${data.opens_post_id}`}
                                    //keyExtractor={(item, index) =>`key-${item.opens_post_id+index}`}
                                    keyExtractor={
                                        (item, index) =>
                                        item.opens_post_id + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()
                                    }
                                    ListFooterComponent={RenderFooter}
                                    onEndReached={HandleLoadMore}
                                    onEndReachedThreshold={0}
                                    showsVerticalScrollIndicator={false}
                                    />
                         </View>
                            }
                </Neomorph>
                <RenderFooter />
            </View>
        </View>
    )
}
export default TrendingPage;
const styles = StyleSheet.create({
   container:{
   
   },
   BodyTop:{
    backgroundColor:colors.secondary,
    height:80,
    width:DeviceWidth,
},
Body:{
    backgroundColor:colors.white,
    height:DeviceHeight/ 100 * 95,
    width:DeviceWidth,
    marginTop:-17,
    borderRadius:15,
    paddingTop:30,
    shadowRadius:20,
    shadowOpacity:0.2,
    paddingBottom:100,
   },
   bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search_input:{
      backgroundColor:colors.white,
  }
});