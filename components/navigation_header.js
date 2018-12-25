import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Header, Left, Icon, Title } from 'native-base';

class NavigationHeader extends Component {
  render() {
    return(
      <Header>
        <Left>
          <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
          <Title>Artists</Title>
        </Left>
      </Header>
    );
  }
}

export default NavigationHeader

const styles = StyleSheet.create({
  navigation:{
    flex: 1,
  }
});
