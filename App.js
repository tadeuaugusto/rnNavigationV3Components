/**
 * - 1/2. AppAppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Signup Button
 *    - 3. AppDrawerNavigator
 *        - 5. Dashboard - DashboardStackNavigator
 *          (needed for header and to change the header based on the tab)
 *            - 4. DashboardTabNavigator
 *                - Tab 1 - FeedStack
 *                - Tab 2 - ProfileStack
 *                - Tab 3 - SettingsStack
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';


import WelcomeScreen from './components/screens/WelcomeScreen';
import DashboardScreen from './components/screens/DashboardScreen';
import Feed from './components/screens/tab/Feed';
import Profile from './components/screens/tab/Profile';
import Settings from './components/screens/tab/Settings';

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";

class App extends Component {
  render() {
    return <AppContainer />
  }
}

// 7. Feed Details
const Detail = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Detail</Text>
  </View>
);


// 6. Create FeedStak containing Feed tab page plus Detail page
const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Feed',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    },
    Detail: {
      screen: Detail
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

// Create ProfileStack
const ProfileStack = createStackNavigator(
  {
    Feed: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Profile',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  }
);

// Create SettingsStack
const SettingsStack = createStackNavigator(
  {
    Feed: {
      screen: Settings,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Settings',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  }
);
// const ProfileStack = createStackNavigator...

// const SettingsStack = createStackNavigator...

// 4. Create the BottomTabNavigator
const DashboardTabNavigator = createBottomTabNavigator({
  FeedStack,
  ProfileStack,
  SettingsStack
}, {
  navigationOptions:({ navigation }) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      header: null,
      headerTitle: routeName
    }
  }
});

// 5. Create DashboardTabNavigator
const DashboardStackNavigator = createStackNavigator({

    DashboardTabNavigator: DashboardTabNavigator

  }, {
  defaultNavigationOptions:({ navigation }) => {
    return{
      headerLeft:(
        <Icon
          style={{paddingLeft: 10}}
          onPress={() => navigation.openDrawer()}
          name='md-menu' size={30} />
      )
    };
  }
});

// 3. Create the AppDrawerNavigator (Dashboard)
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {screen: DashboardStackNavigator}
});

// 1. Create the AppSwitchNavigator (Welcome, Dashboard)
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Dashboard: {screen: AppDrawerNavigator}
});

// 2. Create the AppContainer and include AppSwithNavigation
const AppContainer = createAppContainer(AppSwitchNavigator);



export default App;