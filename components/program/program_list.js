import React, { Component } from 'react';
import {
  View,
  ListView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { ListItem } from 'native-base';

import GLOBAL from '../../constants';
import { fetchArtist } from '../../api/artist_fetcher';
import ProgramListItem from './program_list_item';


// Data Source
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ProgramList extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: ds.cloneWithRows([]), loading: true };
  }

  componentDidMount() {
    fetch(this.props.endpoint)
    .then((response) => response.json())
    .then((responseJson) => responseJson.performances)
    .then((responseJson) => {
        responseJson.sort(function(a, b) {
          return a.time-b.time;
        });
        this.setState({ dataSource: ds.cloneWithRows( responseJson ) }, () => { this.setState({ loading: false }) });
    })
    .catch((error) => {
        console.error(error);
    });
  }

  selectedArtistRow( selectedRowData ) {
    this.props.navigation.navigate('ARTIST', { artistId: selectedRowData.artistId });
  }

  render() {
    return(
      <View>
        {
          (this.state.loading)
          ?
          (<ActivityIndicator size = "large"/>)
          :
          (<ListView style = {{ alignSelf: 'stretch' }}
                     dataSource = { this.state.dataSource }
                     renderRow = {( rowData ) =>
                      <ProgramListItem performance={rowData} onPress={() => this.selectedArtistRow(rowData)}/>
                     }
            />)
            }
        </View>
    )
  }
}

export default ProgramList;

const styles = StyleSheet.create({

})
