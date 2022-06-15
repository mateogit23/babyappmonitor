import 'react-native-gesture-handler';
import React, { Component } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import Routes from "./Routes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  loadFonts = async () => {
    await Font.loadAsync({
      FuturaBold: require("./fonts/FuturaBoldfont.ttf"),
      FuturaLight: require("./fonts/FuturaLightfont.ttf"),
      GothamBold: require("./fonts/GothamBold.ttf"),
    });
    this.setState({ fontsLoaded: true });
  };

  componentDidMount = () => {
    this.loadFonts();
  };

  render() {
    if (this.state.fontsLoaded) {
      return Routes();
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 12 }}>The app is loading...</Text>
        </View>
      );
    }
  }
}
