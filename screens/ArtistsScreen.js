import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ListView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button, Body, ListItem } from 'native-base';

import GLOBAL from '../constants';
import localStorage from '../api/storage';

// Data Source
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ArtistsScreen extends Component {

  constructor() {
    super();
    this.state = { dataSource: ds.cloneWithRows([]), loading: true };
  }

  componentDidMount() {
    storage.load({ key: 'artists', autoSync: true }) // fetch(GLOBAL.ENDPOINTS.ARTISTS)
    .then((responseJson) => {
        // localCompare didn't seem to be working.
        // This is ugly but seems to do the trick. Although there's probably
        // a better place to put it
        responseJson.sort(function(a, b) {
          if(a.sort_name.toLowerCase() < b.sort_name.toLowerCase()) return -1;
          if(a.sort_name.toLowerCase() > b.sort_name.toLowerCase()) return 1;
          return 0;
        });

        this.setState({ dataSource: ds.cloneWithRows( responseJson ) }, () => { this.setState({ loading: false }) });
    })
    .catch((error) => {
        console.error(error);
    });
  }

  selectedArtistRow( selectedArtist )
    {
        this.props.navigation.navigate('ARTIST', { artist: selectedArtist, artistId: selectedArtist.id });
    }

  render(){
    return (
      <Container>
        <Header style={{backgroundColor: GLOBAL.COLOR.YFFGREEN}}>
          <Left>
            <Button transparent>
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Artists</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <View>
        {
          (this.state.loading)
          ?
          (<ActivityIndicator size = "large"/>)
          :
          (<ListView style = {{ alignSelf: 'stretch' }}
                     dataSource = { this.state.dataSource }
                     renderRow = {( rowData ) =>
                        <ListItem style = { styles.item } onPress = { this.selectedArtistRow.bind( this, rowData ) }>
                          <Text style = { styles.listLabel }>{ rowData.name.toUpperCase() }</Text>
                        </ListItem>
                     }
            />)
            }
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  },
  ListItem: {
    height: 60,
    justifyContent: 'center'
  },
  listLabel: {
    flex: 1,
    fontFamily: 'BebasNeueRegular',
    fontSize: 28
  }
})

export default ArtistsScreen
