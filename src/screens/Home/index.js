import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { FeaturedRecipesContext, RecipesContext } from "../../../App";
import Card from "../../components/Card";
import Category from "../../components/Category";
import Input from "../../components/Input";
import RecipeCard from "../../components/RecipeCard";
import Title from "../../components/Title";
import styles from "./styles";
import avatars from "../../../assets/data/avatars.json";
import cooks from "../../../assets/data/cooks.json";

const getAvatarIndex = () => {
  return Math.floor(Math.random() * 13);
};

const getRating = () => {
  return Math.random() * 2 + 3;
};

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
              time={20 + item?.cook_time_minutes + " mins"}
              image={item?.thumbnail_url}
              rating={getRating()}
              author={
                item?.credits?.length
                  ? {
                      name: cooks[index],
                      image: avatars[index],
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
              time={20 + item?.cook_time_minutes + " mins"}
              servings={item?.num_servings}
              image={item?.thumbnail_url}
              rating={item?.user_ratings?.score}
              author={
                item?.credits?.length
                  ? {
                      name: cooks[getAvatarIndex()],
                      image: avatars[getAvatarIndex()],
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
