import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button, Body } from 'native-base';
import GLOBAL from '../constants';


import NavigationHeader from '../components/navigation_header';
import ArtistsList from '../components/artists_list';

class ArtistsScreen extends Component {
  render(){
    return (
      <Container>
        <Header style={{backgroundColor: GLOBAL.COLOR.YFFGREEN}}>
          <Left>
            <Button transparent>
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Artists</Title>
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

export default ArtistsScreen
