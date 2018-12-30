import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import GLOBAL from '../constants';

class ArtistScreenTabButton extends Component {

  render() {
    const buttonLabel = this.props.label;
    return (
      <Button style={(this.props.btnSelected == buttonLabel) ? styles.tabButtonActive : styles.tabButton}
              onPress={() => this.props.callback(buttonLabel)}
              title={buttonLabel}>
        <Text style={(this.props.btnSelected == buttonLabel) ? styles.tabButtonLabelActive : styles.tabButtonLabel}>
          {buttonLabel}
        </Text>
      </Button>
    )
  }
}

export default ArtistScreenTabButton;

const styles = StyleSheet.create({
  tabButton: {
    height: 55,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 0,
  },
  tabButtonActive: {
    height: 55,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 0,
    borderBottomColor: GLOBAL.COLOR.YFFGREEN,
    borderBottomWidth: 2
  },
  tabButtonLabel: {
    fontSize: 20,
    fontFamily: 'BebasNeueRegular',
    fontSize: 24
  },
  tabButtonLabelActive: {
    fontSize: 24,
    fontFamily: 'BebasNeueRegular',
    color: GLOBAL.COLOR.YFFGREEN
  }
})
