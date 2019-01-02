import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem, Container } from 'native-base';

import GLOBAL from '../constants';
import Moment from 'react-moment';

class PlayingTimesListItem extends Component {

  render() {
    const performance = this.props.performance;

    return (
      <Container title="4:00pm" style={styles.playingTimeListItem}>
        <View style={styles.playingTimeContainer}>
          <Moment unix
                  element={Text}
                  format="h:mma"
                  style={styles.playingTime}>
            {performance.time}
          </Moment>
        </View>
        <View style={styles.playingDetails}>
        <Moment unix
                  element={Text}
                  format="dddd MMMM D"
                  style={styles.playingDetailsLabel}>
            {performance.time}
          </Moment>
          <Text style={styles.playingDetailsLabel}> · </Text>
          <Text style={styles.playingDetailsLabel}>
            {performance.stage}
          </Text>
        </View>
      </Container>
    );
  }
}

export default PlayingTimesListItem

const styles = StyleSheet.create({
  playingTimeListItem: {
    height: 60,
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: GLOBAL.COLOR.YFFLIGHTGREY,
    borderBottomWidth: 1
  },
  playingTimeContainer: {
    flex: 1
  },
  playingTime: {
    fontFamily: 'BebasNeueRegular',
    fontSize: 26
  },
  playingDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  playingDetailsLabel: {
    fontSize: 14,
    color: GLOBAL.COLOR.YFFGREEN
  }
})
