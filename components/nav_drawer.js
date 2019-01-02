import React, { Component } from 'react';
import { View, SafeAreaView, Image, ScrollView, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation';

class MainNavigationComponent extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerImage}>
          <Image source={require('../assets/DrawerBanner.png')} style={styles.headerImageImage} />
        </View>
        <ScrollView style={styles.drawerMenu}>
          <DrawerItems {...this.props} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  headerImage: {
    height: 250,
    overflow: 'visible',
  },
  headerImageImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  drawerMenu: {
    flex: 1
  }
});

export default MainNavigationComponent;
