import React, { Component } from 'react';
import { StyleSheet, Text, Linking } from 'react-native';
import { ListItem, Thumbnail } from 'native-base';

class MoreListItem extends Component {
  render() {
    const label = this.props.label;
    const thumbnail = this.props.thumbnail;
    const linkURL = this.props.linkURL;

    return(
      <ListItem button onPress={() => Linking.openURL(linkURL) } style={styles.listItem}>
        <Thumbnail style={styles.listIcon} source={thumbnail} />
          <Text style={styles.listLabel}>{label}</Text>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
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

export default MoreListItem
