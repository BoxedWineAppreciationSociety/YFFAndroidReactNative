import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Container, Header, Left, Button, Icon, Title, Right, Body, Content } from 'native-base';
import GLOBAL from '../constants'

class MadeWithLoveScreen extends Component {
  render() {
    return(
      <Container style={styles.container}>
      <Header style={{backgroundColor: GLOBAL.COLOR.YFFRED}}>
        <Left>
          <Button transparent>
            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Made With Love</Title>
        </Body>
        <Right style={styles.right}>
        </Right>
      </Header>
      <View style={styles.content}>
        <Image style={styles.heroImage} source={require('../assets/made-with-love.png')} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.madeWithLoveText}>
          This app was made with love by a local Yackandandarian, a Liverpudlian and a girl from Ballarat
          {"\n\n"}
          If you like the app, let us know and maybe buy us a beer.
          {"\n\n"}
          We’ll see you at the festival!
        </Text>
      </View>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  },
  right: {
    flex: 0
  },
  content: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'row'
  },
  textView: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  madeWithLoveText: {
    textAlign: 'center',
    lineHeight: 26,
    fontFamily: 'SourceSansPro-Regular',
    margin: 30,
    fontSize: 20
  },
  heroImage: {
    flex: 1,
    resizeMode: 'cover'
  }
})

export default MadeWithLoveScreen;
