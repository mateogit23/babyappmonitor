import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.InfoContainer}>
        <ImageBackground
          source={require("../images/printing.jpg")}
          style={styles.InfoContainer}
          resizeMode={"cover"}
        >
          <View style={{ height: 55 }}></View>
          <View style={styles.papers}>
            <Text
              style={{
                color: "cyan",
                fontSize: 70,
                fontFamily: "FuturaBold",
              }}
            >
              J
            </Text>
            <Text
              style={{
                color: "magenta",
                fontSize: 70,
                fontFamily: "FuturaBold",
              }}
            >
              A
            </Text>
            <Text
              style={{
                color: "yellow",
                fontSize: 70,
                fontFamily: "FuturaBold",
              }}
            >
              R
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 70,
                fontFamily: "FuturaBold",
              }}
            >
              M
            </Text>
          </View>
          <Text style={styles.subtitles}>PRINTINGPRESS</Text>
          <View style={{ height: 20 }}></View>
          <Text style={styles.subtitle}>
            Established in 1998, JARM Printing Press was
          </Text>
          <Text style={styles.subtitle}>
            conceptualized and formed through the
          </Text>
          <Text style={styles.subtitle}>
            propitious efforts of Joselito T. Arzadon
          </Text>
          <Text style={styles.subtitle}>
            and its co-founder, Atty. Rolando J. Morales
          </Text>
          <Text style={styles.subtitle}>
            a legal practitioner and industrialist with
          </Text>
          <Text style={styles.subtitle}>
            a vast experience and knowledge in the areas
          </Text>
          <Text style={styles.subtitle}>of transportation and machinery.</Text>
          <View style={{ height: 30 }}></View>
          <Text style={styles.subtitle}>
            Envisioned to serve the great demands
          </Text>
          <Text style={styles.subtitle}>
            and immense requirements of commercial
          </Text>
          <Text style={styles.subtitle}>and corporate institutions.</Text>
          <Text style={styles.subtitle}>
            JARM Printing Press is presently sought out by
          </Text>
          <Text style={styles.subtitle}>
            educational institutions, small medium and large
          </Text>
          <Text style={styles.subtitle}>
            Industrial companies and other commercial
          </Text>
          <Text style={styles.subtitle}>
            establishments in the Southern Tagalog
          </Text>
          <Text style={styles.subtitle}>
            Region for its top-of-the-line and
          </Text>
          <Text style={styles.subtitle}>
            upgraded printing equipment, quality
          </Text>
          <Text style={styles.subtitle}>prints and layout designs,</Text>
          <Text style={styles.subtitle}>prompt deliver of products</Text>
          <Text style={styles.subtitle}>ALL AT REASONABLE RATES.</Text>
          <View style={{ height: 20 }}></View>
          <Text style={styles.subtitle}>2021</Text>
          <Image
            style={styles.sign}
            Image
            source={require("../images/sign.png")}
          />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  InfoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontFamily: "FuturaBold",
    color: "white",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "FuturaBold",
    color: "black",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  papers: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitles: {
    fontSize: 30,
    fontFamily: "FuturaBold",
    color: "white",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sign: {
    height: 34,
    width: 86,
    alignSelf: "center",
    flexDirection: "row",
  },
});
