import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Category from "../../components/Category";
import RecipeCard from "../../components/RecipeCard";

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

        <RecipeCard
          title="Steak with tomato sauce and bulgur rice."
          author={{
            name: "James Milner",
            image:
              "https://www.stockvault.net//data/2013/09/14/147895/thumb16.jpg",
          }}
          time="20 mins"
        />
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
