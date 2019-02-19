import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {
  createAppContainer,
  createSwitchNavigation,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  FlatList
} from 'react-navigation';
import WelcomeScreen from './components/screens/WelcomeScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App