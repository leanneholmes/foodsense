import React from "react";
import { ImageBackground, View } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../../assets/splashBackground.png")}
      >
        <Button onPress={() => navigation.navigate("Home")}>
          Start Cooking
        </Button>
      </ImageBackground>
    </View>
  );
};

export default React.memo(Splash);
