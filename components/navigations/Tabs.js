import React from 'react';
import { StyleSheet, Text, View,Dimensions,TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
//--------------
import TrendingPage from '../../screens/trendings';
import HomePage from '../../screens/home';
import SearchPage from '../../screens/search';
import AddpostPage from '../../screens/addpost';
import ProfilePage from '../../screens/profile';
//----------------
import colors from '../styles/colors';
import Post_Details from '../../screens/items/post_details';
import Comments_list from '../../screens/items/comments_list';
//----------------
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
//-------------------
const HomeStack = createStackNavigator();
const TrendingStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AddpostStack = createStackNavigator();
// -------------------
const Tab = createBottomTabNavigator();

const BottomTabs = (props) => {
  return(
    <Tab.Navigator
    initialRouteName="Trendigs"
    tabBarOptions={{
      showLabel:false,
      activeTintColor: 'red',
      inactiveTintColor:'#333',
      elevation:0
    }}
    >
      <Tab.Screen name="Trendigs" component={TrendingStackscreen} 
       options={{
        tabBarLabel: 'Trendings',
        tabBarIcon: ({ color, size,focused }) => (
          //<IonIcon name="flame-outline" size={20}
          <Icon name="fire" size={25} 
          style={{color:focused ? colors.primary : colors.white3}}
          />
        ),
       
      }}
      />
      <Tab.Screen name="Home" component={HomeStackscreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size,focused }) => (
          // card-text-outline view-day-outline
          //<Icon name="home-outline" size={23} 
          <IonIcon name="albums-outline" size={22}
          style={{color:focused ? colors.primary : colors.white3}}
          />
        )
      }}
      />
      <Tab.Screen name="AddPost" component={AddpostStackscreen}
      options={{
        tabBarLabel: 'AddPost',
        tabBarIcon: ({ color, size,focused }) => (
          <FeatherIcon name="plus-circle" size={20} 
          style={{color:focused ? colors.primary : colors.white3}}
          />
        )
      }}
      />
      <Tab.Screen name="Search" component={SearchStackscreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color, size,focused }) => (
          <FeatherIcon name="search" size={20} 
          style={{color:focused ? colors.primary : colors.white3}}
          />
        )
      }}
      />
      <Tab.Screen name="Profile" component={ProfileStackscreen}
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size,focused }) => (
          <FeatherIcon name="user" size={20} 
          style={{color:focused ? colors.primary : colors.white3}}
          />
        )
      }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;

const Topbar = ({navigation}) => {
 return(
  <View style={{flexDirection:'row'}}>
  <Icon.Button name='creation' size={20} color='#fff'backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
  <Icon.Button name='bell-outline' size={20} color='#fff'backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
  <Icon.Button name='dots-vertical' size={20} color='#fff'backgroundColor="transparent" onPress={() => {navigation.openDrawer()}}></Icon.Button>
</View>
 );
}
const HomeStackscreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='OPENS' component={HomePage} 
    options={{
      headerTitleAlign:'left',
      headerRight:() => (
        <View style={{flexDirection:'row'}}>
          <Icon.Button name='creation' size={20} color='#333' backgroundColor='#fff' onPress={() => {navigation.openDrawer()}}></Icon.Button>
          <Icon.Button name='bell-outline' size={20} color='#333' backgroundColor='#fff' onPress={() => {navigation.openDrawer()}}></Icon.Button>
          <Icon.Button name='segment' size={20} color='#333' backgroundColor='#fff' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        </View>
      )
    }}
    />
   
  </HomeStack.Navigator> 
);

const SearchStackscreen = ({navigation}) => (
<SearchStack.Navigator>
<SearchStack.Screen name=' ' component={SearchPage}  
options={{
  
  headerShown:true,
  headerTitleAlign:'left',
  headerTransparent:true,
  headerTintColor:'#333'
}}
/>
</SearchStack.Navigator> 
);
const ProfileStackscreen = ({navigation}) => (
<ProfileStack.Navigator>
<ProfileStack.Screen name='Profile' component={ProfilePage}
 options={
 {
    headerShown:false,
  }
}
/>
</ProfileStack.Navigator> 
);
const AddpostStackscreen = ({navigation}) => (
<AddpostStack.Navigator>
<AddpostStack.Screen name='Addpost' component={AddpostPage} 
options={{
  headerShown:false,
  headerTitleAlign:'left',
  headerRight:() => (
   <Topbar />
  )
}}
/>
</AddpostStack.Navigator> 
);
const TrendingStackscreen = ({navigation}) => (
  <TrendingStack.Navigator>
  <TrendingStack.Screen name='Trending' component={TrendingPage} 
 options={{
  headerTitleAlign:'left',
  headerTransparent:true,
  headerTintColor:'#fff',

  headerRight:() => (
   <Topbar />
  )
}}
  />
   <TrendingStack.Screen name='Post_Details' component={Post_Details} 
    options={
      ({route}) => ({
        headerShown:true,
        headerTitle:false,
        headerTransparent:true,
        headerTruncatedBackTitle:false,
        headerStyle: {
          elevation:0
        }
        
      })
    }
    />
     {/* <TrendingStack.Screen name='Comments_list' component={Comments_list} 
    options={
      ({route}) => ({
        headerShown:false,
        headerTitle:false,
        headerTransparent:true,
        headerTruncatedBackTitle:false,
        headerStyle: {
          elevation:0
        }
      })
    }
    /> */}
  </TrendingStack.Navigator> 
  );
