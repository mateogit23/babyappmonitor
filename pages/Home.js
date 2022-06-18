import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.HomeContainer}>
        <ImageBackground
          source={require("../images/BG10.png")}
          style={styles.HomeContainer}
          resizeMode={"stretch"}
        >
          <View style={{ height: 140, alignSelf: "stretch" }}></View>
          <View style={{ alignSelf: "flex-start", marginLeft: 15 }}>
            <Text style={styles.title}>BABY KICK MONITOR </Text>
            <View style={{ height: 0 }}></View>
            <Text style={styles.subtitle}>
              Growth: Baby and Child Starts
            </Text>
          </View>
          <View
            style={{ alignSelf: "flex-end", position: "absolute", bottom: 0 }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("back");
              }}
            >
              <Image
                style={styles.start}
                source={require("../images/CLOUDS.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
  },
  title: {
    fontSize: 48,
    fontFamily: "FuturaBold",
    color: "white",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subtitle: {
    fontSize: 32,
    fontFamily: "FuturaLight",
    color: "white",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  start: {
    height: 120,
    width: 120,
    flex: 1,
    justifyContent: 'flex-end',

  },
});
