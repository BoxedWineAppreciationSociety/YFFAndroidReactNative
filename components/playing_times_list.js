import React, { Component } from 'react';
import {
  View,
  ListView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { ListItem } from 'native-base';
import PlayingTimesListItem from './playing_time_list_item';

// Data Source
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class PlayingTimesList extends Component {
  constructor(props) {
    super(props);
    this.state = { dataSource: ds.cloneWithRows([]), loading: true };
  }

  componentDidMount() {
    const artistId = this.props.artistId || null;

    fetch('https://raw.githubusercontent.com/RustComet/YFFJSON/master/all_performances_remote.json')
    .then((response) => response.json())
    .then((responseJson) => responseJson.performances)
    .then((responseJson) => {
      return responseJson.filter(x => (artistId !== null)?x.artistId == artistId:1==1)
    })
    .then((responseJson) => {
        responseJson.sort(function(a, b) {
          return a-b;
        });
        this.setState({ dataSource: ds.cloneWithRows( responseJson ) }, () => { this.setState({ loading: false }) });
    })
    .catch((error) => {
        console.error(error);
    });
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
                     renderRow = {( rowData ) => <PlayingTimesListItem performance={rowData}/>
                     }
            />)
            }
        </View>
    )
  }
}

export default PlayingTimesList;

const styles = StyleSheet.create({

})
