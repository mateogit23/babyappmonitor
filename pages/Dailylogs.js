import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions, 
  TouchableHighlight, 
 
} from "react-native";


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.HomeContainer}>
        <ImageBackground
          source={require("../images/BG11.png")}
          style={styles.HomeContainer}
          resizeMode={"stretch"}
        >









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
    fontSize: 36,
    fontFamily: "FuturaBold",
    color: "white",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    
  },
  subtitle: {
    fontSize: 25,
    fontFamily: "FuturaLight",
    color: "white",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  start: {
    height: 40,
    width: 180,
  },
});
