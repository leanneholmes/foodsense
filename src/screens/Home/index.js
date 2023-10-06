import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Category from "../../components/Category";
import RecipeCard from "../../components/RecipeCard";
import Card from "../../components/Card";

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

        <FlatList
          style={{ marginHorizontal: -24 }}
          horizontal
          data={[1, 2, 3]}
          keyExtractor={(item) => String(item)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index }) => (
            <RecipeCard
              style={index === 0 ? { marginLeft: 24 } : {}}
              title="Steak with tomato sauce and bulgur rice."
              author={{
                name: "James Milner",
                image:
                  "https://www.stockvault.net//data/2013/09/14/147895/thumb16.jpg",
              }}
              time="20 mins"
            />
          )}
        ></FlatList>

        <Category
          categories={["All", "Trending"]}
          selectedCategory="All"
          onCategoryPress={() => {}}
        />
        <FlatList
          style={{ marginHorizontal: -24 }}
          horizontal
          data={[1, 2, 3]}
          keyExtractor={(item) => String(item)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ index }) => (
            <Card
              style={index === 0 ? { marginLeft: 24 } : {}}
              title="Steak with tomato sauce and bulgur rice."
              author={{
                name: "James Milner",
                image:
                  "https://www.stockvault.net//data/2013/09/14/147895/thumb16.jpg",
              }}
              time="20 mins"
            />
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
