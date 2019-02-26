/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";

import ArtistsScreen from "./screens/ArtistsScreen";
import ProgramScreen from "./screens/ProgramScreen";
import MoreScreen from "./screens/MoreScreen";
import MapScreen from "./screens/MapScreen";
import MainNavigationComponent from "./components/nav_drawer";
import GLOBAL from "./constants";
import MadeWithLoveScreen from "./screens/MadeWithLoveScreen";
import ArtistScreen from "./screens/ArtistScreen";

import { localStorage } from "./api/storage";

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    this.resyncData();
  }

  resyncData() {
    storage
      .getBatchData([
        { key: "artists" },
        { key: "fridayPerformances" },
        { key: "saturdayPerformances" },
        { key: "sundayPerformances" },
        { key: "allPerformances" }
      ])
      .then(results => {
        results.forEach(result => {
          console.log(result);
        });
      });
  }

  render() {
    return <AppNavigator />;
  }
}

const ArtistNavigator = createStackNavigator(
  {
    ARTISTS: {
      screen: ArtistsScreen
    },
    ARTIST: {
      screen: ArtistScreen
    }
  },
  {
    headerMode: "none"
  }
);

const ProgramNavigator = createStackNavigator(
  {
    PROGRAM: {
      screen: ProgramScreen
    },
    ARTIST: {
      screen: ArtistScreen
    }
  },
  {
    headerMode: "none"
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    PROGRAM: {
      screen: ProgramNavigator,
      navigationOptions: {
        drawerLabel: "PROGRAM",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/icons/ic-drawer-note.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN }}
          />
        )
      }
    },
    EVENTMAP: {
      screen: MapScreen,
      navigationOptions: {
        drawerLabel: "EVENT MAP",
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
      screen: ArtistNavigator,
      navigationOptions: {
        drawerLabel: "ARTISTS",
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
        drawerLabel: "MORE",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/icons/ic-drawer-more.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN }}
          />
        )
      }
    },
    MADEWITHLOVE: {
      screen: MadeWithLoveScreen,
      navigationOptions: {
        drawerLabel: "MADE WITH LOVE",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/icons/ic-made-with-love.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: GLOBAL.COLOR.YFFBROWN }}
          />
        )
      }
    }
  },
  {
    contentComponent: MainNavigationComponent,
    defaultNavigationOptions: {
      color: GLOBAL.COLOR.YFFBROWN,
      textAlign: "left"
    },
    contentOptions: {
      labelStyle: {
        fontFamily: "BebasNeueRegular",
        fontSize: 26,
        fontWeight: "normal"
      },
      activeTintColor: GLOBAL.COLOR.YFFBROWN
    }
  }
);

const AppNavigator = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    color: "#352B1F"
  }
});
