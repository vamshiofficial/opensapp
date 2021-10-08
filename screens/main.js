import  React,{ Component,useEffect } from 'react';
import {AuthContext} from '../components/context';
//--------
//import screens
import { enableScreens } from 'react-native-screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from '../components/navigations/Tabs';
import {DrawerContent} from '../components/navigations/sidebar';
import { createStackNavigator } from '@react-navigation/stack';
//-----redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser,fetchUserProfilePosts } from '../redux/actions/index';
import { View,StatusBar } from 'react-native';
//-----
enableScreens();
const Drawer = createDrawerNavigator();
const StackNav = createStackNavigator();
export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchUserProfilePosts();
      // console.log(this.props.currentUser);
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor="#ee3758" />
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="BottomTabs" component={BottomTabs} />
                </Drawer.Navigator>
            </>
        );
    }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser,fetchUserProfilePosts},dispatch); 
export default connect(mapStateToProps,mapDispatchProps)(Main);