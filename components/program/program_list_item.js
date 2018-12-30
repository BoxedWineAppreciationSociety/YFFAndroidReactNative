import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Container, Left, Icon, ListItem, Thumbnail } from 'native-base';

import GLOBAL from '../../constants';
import Moment from 'react-moment';

class ProgramListItem extends Component {
  render() {
    const performance = this.props.performance;


    return(
      <View style={styles.programListItem}>
        <View style={styles.thumbnail}>
          <Thumbnail square source={require('../../assets/images/artist-placeholder.png')} />
        </View>
        <View style={styles.programDetails}>
          <Text style={styles.artistNameLabel}>Scott Cook</Text>
          <Moment unix
                  element={Text}
                  format="h:mma"
                  style={styles.programDetailsText}>
            {performance.time}
          </Moment>
          <Text style={styles.programDetailsText}>{performance.stage}</Text>
        </View>
      </View>
    );
  }
}

export default ProgramListItem;


const styles = StyleSheet.create({
  programListItem: {
    alignItems: 'center',
    height: 100,
    flex: 1,
    flexDirection: 'row',
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 5,
    borderBottomColor: GLOBAL.COLOR.YFFLIGHTGREY,
    borderBottomWidth: 1
  },
  programDetails: {
    marginStart: 20,
    flexDirection: 'column'
  },
  artistNameLabel: {
    fontFamily: 'BebasNeueRegular',
    fontSize: 28,
  },
  programDetailsText: {
    fontFamily: 'BebasNeueRegular',
    fontSize: 18,
    color: GLOBAL.COLOR.YFFGREEN
  }
});
