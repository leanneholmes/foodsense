import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import styles from "./styles";

const Search = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input style={styles.input} />
    </SafeAreaView>
  );
};

export default React.memo(Search);
