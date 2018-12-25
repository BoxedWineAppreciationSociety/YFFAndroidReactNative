import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button, Body } from 'native-base';
import GLOBAL from '../constants';

class MapScreen extends Component {
  render(){
    return (
      <Container>
        <Header style={{backgroundColor: GLOBAL.COLOR.YFFORANGE}}>
          <Left>
            <Button transparent>
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Event Map</Title>
          </Body>
          <Right>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  }
})

export default MapScreen
