import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Title,
  Button,
  View,
  Content
} from "native-base";
import GLOBAL from "../constants";
import ProgramDayPicker from "../components/program/ProgramDayPicker";
import ProgramList from "../components/program/program_list";

class ProgramScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      daySelected: "FRI",
      programEndpoint: GLOBAL.ENDPOINTS.FRIPERFORMANCES
    };
  }

  updateSelectedDay = dataFromButton => {
    this.setState({ daySelected: dataFromButton });
    console.log("Callback");
  };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: GLOBAL.COLOR.YFFRED }}>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Program</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.dayPicker}>
          <ProgramDayPicker
            callback={this.updateSelectedDay}
            daySelected={this.state.daySelected}
          />
        </View>
        <View
          style={
            this.state.daySelected === "FRI" ? styles.programList : styles.none
          }
        >
          <ProgramList
            storageKey="fridayPerformances"
            navigation={this.props.navigation}
          />
        </View>
        <View
          style={
            this.state.daySelected === "SAT" ? styles.programList : styles.none
          }
        >
          <ProgramList
            storageKey="saturdayPerformances"
            navigation={this.props.navigation}
          />
        </View>
        <View
          style={
            this.state.daySelected === "SUN" ? styles.programList : styles.none
          }
        >
          <ProgramList
            storageKey="sundayPerformances"
            navigation={this.props.navigation}
          />
        </View>
      </Container>
    );
  }
}

export default ProgramScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },
  dayPicker: {
    height: 100
  },
  programList: {
    flex: 1,
    marginTop: 10
  },
  title: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: 24
  },
  none: {
    display: "none"
  }
});
