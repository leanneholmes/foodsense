import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

const Rating = ({ rating }) => {
  const arr = [1, 2, 3, 4, 5];
  //0-1.4 = 1 star
  // 1.5 - 2.4 = 2 stars
  // 2.5 - 3.4 = 3 stars
  // 3.5 - 4.4 = 4 stars
  // 4.5 - 5 = 5 stars

  const renderStars = () => {
    return arr?.map((star) => {
      if (Math.round(rating) >= star) {
        return (
          <Image
            key={star}
            style={styles.star}
            source={require("../../../assets/star.png")}
          />
        );
      } else {
        return (
          <Image key={star}
            style={styles.star}
            source={require("../../../assets/starEmpty.png")}
          />
        );
      }
    });
  };
  return <View style={styles.row}>{renderStars()}</View>;
};

export default React.memo(Rating);
