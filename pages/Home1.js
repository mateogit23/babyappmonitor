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

<View style={{ height: 140, alignSelf: "stretch" }}></View>
         
            <Text style={styles.title}>Kick Detected </Text>
            <View style={{ height: 50 }}></View>

            <View style={{  justifyContent: 'center',
        alignItems: 'center',}}>
            <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * .75,
        height: Dimensions.get('window').width * .75,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay! Baby is Kicking') }
    >
      <Text style={{ fontSize: 100,
    fontFamily: "FuturaBold",}}> 30 </Text>
    </TouchableHighlight>


 <View style={{ height: 70 }}></View>

    <View
            style={{ justifyContent: 'center',
            alignItems: 'center', }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Daily");
              }}
            >
              <Image
                style={styles.start}
                source={require("../images/Rectangle.png")}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
          </View>



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
