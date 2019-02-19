import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


import WelcomeScreen from './components/screens/WelcomeScreen';
import {
  createSwitchNavigation,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


class App extends Component {
  render() {
    return <AppContainer />
  }
}

// 4. Create the BottomTabNavigator
const DashboardTabNavigator = createBottomTabNavigator({
  Feed,
  Profile,
  Settings
});

// 5. Create DashboardTabNavigator
const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: DashboardTabNavigator
})

// 3. Create the AppDrawerNavigator (Dashboard)
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {screen: DashboardStackNavigator}
});

// 1. Create the AppSwitchNavigation (Welcome, Dashboard)
const AppSwitchNavigation = createSwitchNavigation({
  Welcome: {screen: WelcomeScreen},
  Dashboard: {screen: DashboardScreen}
});

// 2. Create the AppContainer and include AppSwithNavigation
const AppContainer = createAppContainer(AppSwitchNavigation);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App