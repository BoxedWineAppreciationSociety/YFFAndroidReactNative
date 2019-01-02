import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { fetchArtist } from '../../api/artist_fetcher';
import SocialButtonTouchableOpacity from './social_button_touchable_opacity';

class SocialButtonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: { name: 'loading'}
    };
  }

  componentDidMount() {
    fetchArtist(this.props.artistId)
      .then((response) => {
        this.setState({ artist: response})
      });
  }

  render() {
    return(
      <ScrollView horizontal={true} style={styles.artistSocialList}>
        <SocialButtonTouchableOpacity service='facebook' link={this.state.artist.facebook} />
        <SocialButtonTouchableOpacity service='twitter' link={this.state.artist.twitter} />
        <SocialButtonTouchableOpacity service='instagram' link={this.state.artist.instagram} />
        <SocialButtonTouchableOpacity service='soundcloud' link={this.state.artist.soundcloud} />
        <SocialButtonTouchableOpacity service='itunes' link={this.state.artist.itunes} />
        <SocialButtonTouchableOpacity service='youtube' link={this.state.artist.youtube} />
        <SocialButtonTouchableOpacity service='website' link={this.state.artist.website} />
      </ScrollView>
    )
  }
}

export default SocialButtonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  artistSocialList: {
    flex: 1,
    marginBottom: 20
  }
})
