import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Button, Body, Title, Right, Icon } from 'native-base';
import GLOBAL from '../constants'
import ArtistScreenTabButton from '../components/artist_screen_tab_button';
import PlayingTimesList from '../components/playing_times_list';
import { fetchArtist } from '../api/artist_fetcher';
import images from '../assets/artist_photos/index';
import { ScrollView } from 'react-native-gesture-handler';
import SocialButtonList from '../components/artists/social_button_list';

class ArtistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { btnSelected: 'details', artist: { name: 'Loading…', summary: 'Loading…' } }
  }

  componentDidMount() {
    const { navigation } = this.props;

    if (navigation.getParam('artist') !== undefined) {
      this.setArtist(navigation.getParam('artist', null));
    } else {
      fetchArtist(navigation.getParam('artistId', null))
      .then((response) => {
        this.setArtist(response)
      });
    }
  }

  // Update the btnSelected State on ArtistScreenTabButton press
  updateSelectedTab = (dataFromButton) => {
    this.setState({ btnSelected: dataFromButton });
  }

  setArtist(artist) {
    this.setState({ artist: artist })
  }

  artistImage(imageName) {
    return (images[imageName]!=null) ? images[imageName] : require('../assets/images/artist-placeholder.png');
  }

  render() {
    const { navigation } = this.props;

    const artistName = this.state.artist.name;
    const artistBio = this.state.artist.summary;
    const artistId = navigation.getParam('artistId');

    return(
      <Container style={{alignItems: 'stretch', flexDirection: 'column'}}>
        <Header style={{backgroundColor: (navigation.getParam('fromProgram') == true)?GLOBAL.COLOR.YFFRED:GLOBAL.COLOR.YFFGREEN}}>
          <Left>
            <Button transparent>
              <Icon name='md-arrow-back' onPress={() => this.props.navigation.goBack()} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Artist</Title>
          </Body>
          <Right />
        </Header>
        <View>
          <Image style={styles.artistImage} source={this.artistImage(this.state.artist.image_name)} />
        </View>
        <View>
          <Text style={styles.artistName} numberOfLines={1}>{artistName.toUpperCase()}</Text>
        </View>
        <View style={styles.aboutPlayinTimesContainer}>
          <ArtistScreenTabButton label='details' btnSelected={this.state.btnSelected} callback={this.updateSelectedTab} />
          <ArtistScreenTabButton label='playing times' btnSelected={this.state.btnSelected} callback={this.updateSelectedTab} />
        </View>
        <ScrollView style={(this.state.btnSelected == 'details')?styles.artistDetails:styles.none}>
          <View style={styles.bioTextContainer}>
            <Text style={styles.artistBioText}>{artistBio}</Text>
          </View>
          <SocialButtonList artistId={artistId} />
        </ScrollView>
        <View style={(this.state.btnSelected == 'details')?styles.none:styles.playingTimes}>
          <PlayingTimesList artistId={artistId} />
        </View>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
    textAlign: 'left'
  },
  artistImageView: {
    alignItems: 'stretch',
    flex: 1,
    height: 300,
    // flexDirection: 'row'
  },
  artistImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  artistName: {
    elevation: 1,
    marginTop: -40,
    fontSize: 28,
    color: '#FFFFFF',
    fontFamily: 'BebasNeueRegular',
    marginStart: 20,
    textShadowColor: 'rgba(53, 43, 31, 1)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 6
  },
  aboutPlayinTimesContainer: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 80
  },
  artistDetails: {
    flex: 1,
    marginTop: 0,
    marginStart: 18,
    marginEnd: 18
  },
  bioTextContainer: {
    marginBottom: 20
  },
  artistBioText: {
    fontSize: 16,
    lineHeight: 22
  },
  none: {
    display: 'none'
  },
  playingTimes: {
    flex: 5
  }
})
export default ArtistScreen
