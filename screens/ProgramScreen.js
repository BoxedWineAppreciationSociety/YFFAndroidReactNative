import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import { Container, Header, Left, Right, Body, Icon, Title, Button, View, Content } from 'native-base';
import GLOBAL from '../constants';
import ProgramDayPicker from '../components/program/day_picker';
import ProgramList from '../components/program/program_list';

class ProgramScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      daySelected: 'SAT',
      programEndpoint: GLOBAL.ENDPOINTS.FRIPERFORMANCES
    }
  }

  updateSelectedDay = (dataFromButton) => {
    this.setState({ daySelected: dataFromButton });
    console.log('Callback')
  }

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
        <ProgramDayPicker callback={this.updateSelectedDay} daySelected={this.state.daySelected} />
      </View>
      <View style={(this.state.daySelected === 'FRI') ? styles.programList : styles.none}>
        <ProgramList endpoint={GLOBAL.ENDPOINTS.FRIPERFORMANCES} />
      </View>
      <View style={(this.state.daySelected === 'SAT') ? styles.programList : styles.none}>
        <ProgramList endpoint={GLOBAL.ENDPOINTS.SATPERFORMANCES} />
      </View>
      <View style={(this.state.daySelected === 'SUN') ? styles.programList : styles.none}>
        <ProgramList endpoint={GLOBAL.ENDPOINTS.SUNPERFORMANCES} daySelected={this.state.daySelected} />
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
  },
  none: {
    display: 'none'
  }
});
