import React from "react";
import { Image, Text, View } from "react-native";
import Rating from "../Rating";
import styles from "./styles";

const Card = ({ title, style, image, time }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.upper}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{time}</Text>
      </View>
    </View>
  );
};

export default React.memo(Card);
