import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import { Container, Header, Left, Right, Body, Icon, Title, Button, View } from 'native-base';
import GLOBAL from '../constants';
import ProgramDayPicker from '../components/program/day_picker';
import PlayingTimesList from '../components/playing_times_list';

class ProgramScreen extends Component{
  render(){
    return (
      <Container>
      <Header style={{backgroundColor: GLOBAL.COLOR.YFFRED}}>
        <Left>
          <Button transparent>
            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Program</Title>
        </Body>
        <Right>
        </Right>
      </Header>

      <ProgramDayPicker />
    </Container>
    );
  }
}

export default ProgramScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  }
});
