import React, { useState } from "react";
import { useEffect } from "react";
import { getRecipesList } from "./src/http";
import { Image, Pressable, StyleSheet } from "react-native";
import Splash from "./src/screens/Splash";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";

const Stack = createStackNavigator();
export const RecipesContext = React.createContext();
export const FeaturedRecipesContext = React.createContext();

const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require("./assets/arrowLeft.png")} />
    </Pressable>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

export default function App() {
  const [recipes, setRecipes] = useState();
  const [featuredRecipes, setFeaturedRecipes] = useState();
  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch("healthy", "1");
      console.log("Recipes from APP.JS ", rec);
      setRecipes(rec);
      const featuredRec = await handleRecipesFetch("halloween", "5");
      console.log("Featured recipes", featuredRec);
      setFeaturedRecipes(featuredRec);
    })();
  }, []);

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size);
      setRecipes(recipes?.data?.results);
    } catch (e) {
      console.log("Error fetching recipes ", e);
    }
  };
  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      <FeaturedRecipesContext.Provider
        value={{ featuredRecipes, setFeaturedRecipes }}
      >
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              options={{ headerLeft: null, gestureEnabled: false }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ headerLeft: (props) => <BackButton {...props} /> }}
              name="Search"
              component={Search}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FeaturedRecipesContext.Provider>
    </RecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    marginTop: 7,
  },
});
