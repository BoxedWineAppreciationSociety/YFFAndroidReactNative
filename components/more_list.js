import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, List, ListItem, Thumbnail } from 'native-base';
import MoreListItem from './more_list_item';

class MoreList extends Component {
  render() {
    return(
      <Content style={styles.container}>
        <List>
          <MoreListItem label="Festival Info" thumbnail={require('../assets/icons/ic-festival-info.png')} linkURL="https://yackfolkfestival.com/festival-info/" />
          <MoreListItem label="Buy Tickets" thumbnail={require('../assets/icons/ic-buy-tickets.png')} linkURL="https://yackfolkfestival.com/festival-info/tickets/"/>
          <MoreListItem label="News" thumbnail={require('../assets/icons/ic-news.png')} linkURL="https://yackfolkfestival.com/news/" />
          <MoreListItem label="Our Website" thumbnail={require('../assets/icons/ic-website.png')} linkURL="https://yackfolkfestival.com/" />
          <MoreListItem label="Facebook" thumbnail={require('../assets/icons/facebook.png')} linkURL="https://www.facebook.com/yackfolkfestival/" />
          <MoreListItem label="Instagram" thumbnail={require('../assets/icons/instagram.png')} linkURL="https://www.instagram.com/yackfolkfestival/"/>
          <MoreListItem label="Twitter" thumbnail={require('../assets/icons/twitter.png')} linkURL="https://twitter.com/yackfolkfest/"/>
        </List>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {

  },
  listIcon: {
    height: 32,
    width: 32,
    marginEnd: 20,
  },
  listLabel: {
    flex: 1,
    fontFamily: 'BebasNeueRegular',
    fontSize: 28
  }
});

export default MoreList
