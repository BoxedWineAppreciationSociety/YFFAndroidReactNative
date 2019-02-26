import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Left, Title, Right, Button, Container } from "native-base";

import GLOBAL from "../../constants";

ProgramDayPicker = ({ callback, daySelected }) => {
  return (
    <View style={styles.programDayPicker}>
      <ImageBackground
        style={styles.bunting}
        source={require("../../assets/images/Bunting.png")}
      >
        <View style={styles.dateButtonsContainer}>
          <Button
            style={styles.daySelectionButton}
            onPress={() => callback("FRI")}
          >
            <Text
              style={
                daySelected == "FRI"
                  ? styles.dayHeadingActive
                  : styles.dayHeading
              }
            >
              FRI
            </Text>
            <Text
              style={
                daySelected == "FRI" ? styles.dayDetailActive : styles.dayDetail
              }
            >
              {GLOBAL.DATES.FRI}
            </Text>
          </Button>
          <Button
            style={styles.daySelectionButton}
            onPress={() => callback("SAT")}
          >
            <Text
              style={
                daySelected == "SAT"
                  ? styles.dayHeadingActive
                  : styles.dayHeading
              }
            >
              SAT
            </Text>
            <Text
              style={
                daySelected == "SAT" ? styles.dayDetailActive : styles.dayDetail
              }
            >
              {GLOBAL.DATES.SAT}
            </Text>
          </Button>
          <Button
            style={styles.daySelectionButton}
            onPress={() => callback("SUN")}
          >
            <Text
              style={
                daySelected == "SUN"
                  ? styles.dayHeadingActive
                  : styles.dayHeading
              }
            >
              SUN
            </Text>
            <Text
              style={
                daySelected == "SUN" ? styles.dayDetailActive : styles.dayDetail
              }
            >
              {GLOBAL.DATES.SUN}
            </Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProgramDayPicker;

const styles = StyleSheet.create({
  bunting: {
    width: "100%",
    height: 110,
    flex: 1
  },
  programDayPicker: {
    flex: 1
  },
  dateButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingStart: 40,
    paddingEnd: 40,
    borderBottomColor: GLOBAL.COLOR.YFFLIGHTGREY,
    borderBottomWidth: 1
  },
  daySelectionButton: {
    marginTop: 20,
    marginBottom: 20,
    height: 70,
    width: 85,
    backgroundColor: "#FFF",
    flexDirection: "column",
    justifyContent: "center"
  },
  dayHeading: {
    flex: 1.2,
    fontFamily: "BebasNeueBold",
    fontSize: 28
  },
  dayHeadingActive: {
    flex: 1.2,
    fontFamily: "BebasNeueBold",
    fontSize: 28,
    color: GLOBAL.COLOR.YFFRED
  },
  dayDetail: {
    flex: 1,
    fontSize: 18,
    fontFamily: "BebasNeueRegular"
  },
  dayDetailActive: {
    flex: 1,
    fontSize: 18,
    fontFamily: "BebasNeueRegular",
    color: GLOBAL.COLOR.YFFRED
  }
});
