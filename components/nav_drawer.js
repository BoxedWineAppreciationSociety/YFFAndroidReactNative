import React, { Component } from 'react';
import { View, SafeAreaView, Image, ScrollView, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation';

class MainNavigationComponent extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerImage}>
          <Image source={require('../assets/DrawerBanner.png')} style={styles.headerImageImage} />
        </View>
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    paddingBottom: 40,
    flex: 2,
    overflow: 'visible',
  },
  headerImageImage: {
    // flex: 2,
    width: '100%',
    // alignSelf: 'stretch',
    resizeMode: 'cover',
    // overflow: 'visible'

  }
});

export default MainNavigationComponent;
