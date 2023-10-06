import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
      <Image
        style={styles.icon}
        source={require("../../../assets/arrowRight.png")}
      />
    </TouchableOpacity>
  );
};

export default React.memo(Button);
