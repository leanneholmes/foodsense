import React from "react";
import { Text, Image, SafeAreaView, View, ScrollView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";

const getAvatarIndex = () => {
  return Math.floor(Math.random() * 13);
};

const getRating = () => {
  return Math.random() * 2 + 3;
};

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  const nutrition = item?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {});
  const instructions = item?.instructions || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
        <Title
          style={[styles.title, { marginBottom: 16 }]}
          text={item?.name}
        ></Title>

        {nutritionKeys?.map((key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.key}>{key}</Text>
            <Text style={styles.value}>{nutrition[key]}</Text>
          </View>
        ))}

        <Title
          style={[styles.title, { marginTop: 16 }]}
          text="Instructions"
        ></Title>

        {instructions?.map((instruction, index) => (
          <View key={instruction?.id} style={styles.instructionRow}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.instructionText}>
              {instruction?.display_text}
            </Text>
          </View>
        ))}

        {!instructions?.length ? (
          <Text style={styles.value}>No instructions found.</Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(RecipeDetails);
