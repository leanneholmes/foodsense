import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { FeaturedRecipesContext, RecipesContext } from "../../../App";
import Card from "../../components/Card";
import Category from "../../components/Category";
import Input from "../../components/Input";
import RecipeCard from "../../components/RecipeCard";
import Title from "../../components/Title";
import styles from "./styles";

const Home = ({ navigation }) => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState();
  const { featuredRecipes } = useContext(FeaturedRecipesContext);
  const { recipes } = useContext(RecipesContext);

  useEffect(() => {
    const tagsList = [];

    recipes?.forEach((recipe) => {
      recipe?.tags?.forEach((tag) => {
        if (!tagsList?.includes(tag?.name)) {
          tagsList?.push(tag?.name);
        }
      });
    });

    setTags(tagsList);
  }, [recipes]);

  return (
    <SafeAreaView>
      <Input
        style={styles.input}
        showSearchIcon
        pressable
        onPress={() => navigation.navigate("Search")}
      />
      <View style={styles.container}>
        <Title text="Featured Recipes" />

        <FlatList
          horizontal
          data={featuredRecipes}
          style={{ marginHorizontal: -24 }}
          keyExtractor={(item) => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <RecipeCard
              style={index === 0 ? { marginLeft: 24 } : {}}
              title={item?.name}
              time={item?.cook_time_minutes}
              image={item?.thumbnail_url}
              rating={item?.user_ratings?.score}
              author={
                item?.credits?.length
                  ? {
                      name: item?.credits[0]?.name,
                      image: item?.credits[0]?.image_url,
                    }
                  : null
              }
            />
          )}
        />

        <Category
          categories={tags}
          selectedCategory={selectedTag}
          onCategoryPress={setSelectedTag}
        />

        <FlatList
          horizontal
          data={recipes}
          style={{ marginHorizontal: -24 }}
          keyExtractor={(item) => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Card
              style={index === 0 ? { marginLeft: 24 } : {}}
              title={item?.name}
              servings={item?.num_servings}
              image={item?.thumbnail_url}
              rating={item?.user_ratings?.score}
              author={
                item?.credits?.length
                  ? {
                      name: item?.credits[0]?.name,
                      image: item?.credits[0]?.image_url,
                    }
                  : null
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
