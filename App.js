/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";

import AppDrawerNavigator from "./navigators/AppDrawerNavigator";

const AppNavigator = createAppContainer(AppDrawerNavigator);

export default class App extends Component {
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
