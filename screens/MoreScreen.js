import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button, Body, Content, List, ListItem } from 'native-base';
import GLOBAL from '../constants';
import MoreList from '../components/more_list';

class MoreScreen extends Component {
  render(){
    return (
      <Container>
        <Header style={{backgroundColor: GLOBAL.COLOR.YFFTEAL}}>
          <Left>
            <Button transparent>
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>More</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <MoreList />
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

export default MoreScreen
