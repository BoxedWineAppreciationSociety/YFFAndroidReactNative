/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";

import ArtistsScreen from './screens/ArtistsScreen'
import ProgramScreen from './screens/ProgramScreen'
import MoreScreen from './screens/MoreScreen'
import MapScreen from './screens/MapScreen'
import MainNavigationComponent from './components/nav_drawer';
import GLOBAL from './constants';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}


const AppDrawerNavigator = createDrawerNavigator({
  PROGRAM: {
    screen: ProgramScreen,
    navigationOptions: {
      drawerLabel: 'PROGRAM',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./assets/icons/ic-drawer-note.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN }}
        />
      )
    },
  },
  EVENT_MAP: {
    screen: MapScreen,
    navigationOptions: {
      drawerLabel: 'EVENT MAP',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./assets/icons/ic-drawer-map.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN }}
        />
      )
    }
  },
  ARTISTS: {
    screen: ArtistsScreen,
    navigationOptions: {
      drawerLabel: 'ARTISTS',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./assets/icons/ic-drawer-guitar.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN }}
        />
      )
    }
  },
  MORE: {
    screen: MoreScreen,
    navigationOptions: {
      drawerLabel: 'MORE',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require("./assets/icons/ic-drawer-more.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN }}
        />
      ),
    }
  },
}, {
  contentComponent: MainNavigationComponent,
  defaultNavigationOptions: {
    color: GLOBAL.COLOR.YFFBROWN,
    textAlign: 'left'
  },
  contentOptions: {
    labelStyle: {
      fontFamily: 'BebasNeueRegular',
      fontSize: 26,
      fontWeight: 'normal'
    }
  }
})

const AppNavigator = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    color: '#352B1F'
  }
});
