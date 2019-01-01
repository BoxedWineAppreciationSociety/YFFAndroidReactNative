import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';

import GLOBAL from '../../constants';
import { fetchArtist } from '../../api/artist_fetcher';

import Moment from 'react-moment';

class ProgramListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {
        name: 'Loading…'
      }
    }
  }

  render() {
    const performance = this.props.performance;

    fetchArtist(this.props.performance.artistId)
      .then((response) => {
        this.setState({ artist: response});
      }
    );

    return(
      <TouchableOpacity style={styles.programListItem} onPress={this.props.onPress}>
        <View style={styles.thumbnail}>
          <Thumbnail square source={require('../../assets/images/artist-placeholder.png')} />
        </View>
        <View style={styles.programDetails}>
          <Text style={styles.artistNameLabel}>{this.state.artist.name}</Text>
          <Moment unix
                  element={Text}
                  format="h:mma"
                  style={styles.programDetailsText}>
            {performance.time}
          </Moment>
          <Text style={styles.programDetailsText}>{performance.stage}</Text>
        </View>
      </TouchableOpacity>
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
