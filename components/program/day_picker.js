import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { Left, Title, Right, Button, Container } from 'native-base';

import GLOBAL from '../../constants';

class ProgramDayPicker extends Component {
  render() {
    return(
      <View style={styles.programDayPicker}>
        <ImageBackground style={styles.bunting} source={require('../../assets/images/Bunting.png')}>
          <View style={styles.dateButtonsContainer}>
            <Button style={styles.daySelectionButton}>
              <Text style={styles.dayHeading}>FRI</Text>
              <Text style={styles.dayDetail}>{GLOBAL.DATES.FRI}</Text>
            </Button>
            <Button style={styles.daySelectionButton}>
              <Text style={styles.dayHeading}>SAT</Text>
              <Text style={styles.dayDetail}>{GLOBAL.DATES.SAT}</Text>
            </Button>
            <Button style={styles.daySelectionButton}>
              <Text style={styles.dayHeading}>SUN</Text>
              <Text style={styles.dayDetail}>{GLOBAL.DATES.SUN}</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default ProgramDayPicker

const styles = StyleSheet.create({
  bunting: {
    width: '100%',
    height: 80,
    flex: 1
  },
  programDayPicker: {
    flex: 1
  },
  dateButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 40,
    paddingEnd: 40,
  },
  daySelectionButton: {
    marginTop: 20,
    marginBottom: 20,
    height: 70,
    width: 85,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dayHeading: {
    flex: 2,
    fontFamily: 'BebasNeueBold',
    fontSize: 28
  },
  dayDetail: {
    flex: 1,
    fontFamily: 'BebasNeueRegular'
  }
});
