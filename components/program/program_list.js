import React, { Component } from 'react';
import {
  View,
  ListView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import ProgramListItem from './program_list_item';

import { localStorage } from '../../api/storage';

// Data Source
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ProgramList extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: ds.cloneWithRows([]), loading: true };
  }

  componentDidMount() {
    storage.load({ key: this.props.storageKey, autoSync: true })
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
    this.props.navigation.navigate('ARTIST', { artistId: selectedRowData.artistId, fromProgram: true });
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
