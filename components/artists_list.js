import React, { Component } from 'react';
import { View, Text, ListView} from 'react-native';
import { Container, Header, Left, Icon, Title, Button, Content, List, ListItem } from 'native-base';
import GLOBAL from '../constants';

class ArtistsList extends Component {
  render() {
    return(
      <Content>
        <List>
          <ListItem thumbnail>
            <Text>Scott Cook</Text>
          </ListItem>
          <ListItem>
            <Text>Rowena Wise</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default ArtistsList;
