import React, { useState, useContext, useEffect } from "react";
import { RecipesContext } from "../../../App";
import { FlatList, SafeAreaView, View } from "react-native";
import Input from "../../components/Input";
import styles from "./styles";
import Card from "../../components/Card";
import avatars from "../../../assets/data/avatars.json";
import cooks from "../../../assets/data/cooks.json";

const getAvatarIndex = () => {
  return Math.floor(Math.random() * 13);
};

const getRating = () => {
  return Math.random() * 2 + 3;
};

const Search = ({ navigation }) => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword?.length > 2) {
      const filteredItems = recipes?.filter((rec) =>
        rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase())
      );
      setFilteredRecipes(filteredItems);
    } else {
      setFilteredRecipes([]);
    }
  }, [keyword]);

  return (
    <SafeAreaView style={styles.container}>
      <Input
        autoFocus
        onChangeText={setKeyword}
        value={keyword}
        style={styles.input}
      />
      <View style={styles.results}>
        <FlatList
          style={{ flexGrow: 1 }}
          data={filteredRecipes}
          numColumns={2}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item, index }) => (
            <Card
              onPress={() => navigation.navigate("RecipeDetails", { item })}
              style={styles.result}
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

export default React.memo(Search);
