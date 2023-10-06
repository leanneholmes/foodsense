import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Category from "../../components/Category";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Input
        style={styles.input}
        showSearchIcon
        pressable
        onPress={() => navigation.navigate("Search")}
      />
      <View style={styles.container}>
        <Title text="Featured recipes" />
        <Category
          categories={["All", "Trending"]}
          selectedCategory="All"
          onCategoryPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
