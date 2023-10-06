import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";

const Home = ({}) => {
  return (
    <SafeAreaView style={styles.background}>
      <Text>Homepage</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);
