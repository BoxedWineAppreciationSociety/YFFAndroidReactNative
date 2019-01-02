import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';
import { Thumbnail } from 'native-base';

const socialIcons = {
  'facebook': require('../../assets/icons/social/facebook.png'),
  'twitter': require('../../assets/icons/social/twitter.png'),
  'instagram': require('../../assets/icons/social/instagram.png'),
  'bandcamp': require('../../assets/icons/social/bandcamp.png'),
  'soundcloud': require('../../assets/icons/social/soundcloud.png'),
  'reverbnation': require('../../assets/icons/social/reverbnation.png'),
  'itunes': require('../../assets/icons/social/itunes.png'),
  'youtube': require('../../assets/icons/social/youtube.png'),
  'website': require('../../assets/icons/social/website.png'),
}

class SocialButtonTouchableOpacity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: ''
    }
  }

  componentDidMount() {
    this.setState({ link: this.props.link });
  }

  componentWillReceiveProps(props) {
    this.setState({ link: props.link});
  }

  render() {
    return(
      <TouchableOpacity style={this.state.link != ''?styles.iconLink:styles.none} onPress={() => Linking.openURL(this.state.link) }>
        <Thumbnail style={styles.thumbnail} source={socialIcons[this.props.service]} />
      </TouchableOpacity>
    )
  }
}

export default SocialButtonTouchableOpacity

const styles = StyleSheet.create({
  iconLink: {
    flex: 1
  },
  none: {
    display: 'none'
  },
  thumbnail: {
    marginEnd: 10
  }
})
