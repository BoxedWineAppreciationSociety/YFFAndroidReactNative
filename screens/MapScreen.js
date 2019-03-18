import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Body
} from "native-base";
import PhotoView from "react-native-photo-view";
import GLOBAL from "../constants";

MapScreen = ({ navigation }) => {
  return (
    <Container>
      <Header style={{ backgroundColor: GLOBAL.COLOR.YFFORANGE }}>
        <Left>
          <Button transparent>
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Event Map</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.container}>
        <PhotoView
          source={require("../assets/mapImage.png")}
          minimumZoomScale={1}
          maximumZoomScale={3}
          androidScaleType="fitCenter"
          onLoad={() => console.log("Image loaded!")}
          style={{ flex: 1, maxWidth: '100%', maxHeight: '100%' }}
          resizeMode={'contain'}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: 24
  },
  container: {
    flex: 1,
    zIndex: -1
  }
});

export default MapScreen;
