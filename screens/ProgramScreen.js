import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import { Container, Header, Left, Right, Body, Icon, Title, Button, View, Content } from 'native-base';
import GLOBAL from '../constants';
import ProgramDayPicker from '../components/program/day_picker';
import ProgramList from '../components/program/program_list';

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
      <View style={styles.dayPicker}>
        <ProgramDayPicker />
      </View>
      <View style={styles.programList}>
        <ProgramList />
      </View>
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
  dayPicker: {
    flex: 1
  },
  programList: {
    flex: 4.6,
    marginTop: 10
  },
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  }
});
