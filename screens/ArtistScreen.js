import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Button, Body, Title, Right, Icon } from 'native-base';
import GLOBAL from '../constants'

class ArtistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { btnSelected: 'details' }
  }

  render() {
    const { navigation } = this.props;
    const artist = navigation.getParam('artist', null);
    const artistName = artist.name;
    const artistBio = artist.summary;

    return(
      <Container style={{alignItems: 'stretch'}}>
        <Header style={{backgroundColor: GLOBAL.COLOR.YFFGREEN}}>
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
          <Image style={styles.artistImage} source={require('../assets/images/artist-placeholder.png')} />
        </View>
        <View>
          <Text style={styles.artistName}>{artistName.toUpperCase()}</Text>
        </View>
        <View style={styles.aboutPlayinTimesContainer}>
          <Button style={(this.state.btnSelected == 'details') ? styles.tabButtonActive : styles.tabButton}
                  onPress={() => this.setState({ btnSelected: 'details' })}>
            <Text style={(this.state.btnSelected == 'details') ? styles.tabButtonLabelActive : styles.tabButtonLabel}>Details</Text>
          </Button>
          <Button style={(this.state.btnSelected == 'playingTimes') ? styles.tabButtonActive : styles.tabButton}
                  onPress={() => this.setState({ btnSelected: 'playingTimes' })}>
            <Text style={(this.state.btnSelected == 'playingTimes') ? styles.tabButtonLabelActive : styles.tabButtonLabel}>Playing Times</Text>
          </Button>
        </View>
        <View style={styles.artistDetails}>
          <Text>{artistBio}</Text>
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
    flexDirection: 'row'
  },
  artistImage: {
    width: '100%',
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  tabButton: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 0,
  },
  tabButtonActive: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 0,
    borderBottomColor: GLOBAL.COLOR.YFFGREEN,
    borderBottomWidth: 2
  },
  tabButtonLabel: {
    fontSize: 20,
    fontFamily: 'BebasNeueRegular'
  },
  tabButtonLabelActive: {
    fontSize: 20,
    fontFamily: 'BebasNeueRegular',
    color: GLOBAL.COLOR.YFFGREEN
  },
  artistDetails: {
    flex: 5,
    marginTop: 0,
    marginStart: 10,
    marginEnd: 10,
    fontSize: 16,
  }
})
export default ArtistScreen
