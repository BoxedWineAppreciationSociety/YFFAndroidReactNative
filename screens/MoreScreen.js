import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button, Body } from 'native-base';
import GLOBAL from '../constants';

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
