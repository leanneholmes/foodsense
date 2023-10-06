import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../../assets/splash.png")}
      >
        <Button onPress={() => navigation.navigate("Home")}>
          Start Cooking
        </Button>
      </ImageBackground>
    </View>
  );
};

export default React.memo(Splash);
