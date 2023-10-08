import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Splash from "./src/screens/Splash";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import { getRecipesList } from "./src/http";

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
  const [recipes, setRecipes] = useState([]);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch("lunch", "15");
      setRecipes(rec);
      const featuredRec = await handleRecipesFetch("halloween", "5");
      setFeaturedRecipes(featuredRec);
    })();
  }, []);

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size);
      return recipes?.data?.results;
    } catch (e) {
      console.log("error fetching recipes :>> ", e);
    }
  };

  return (
    <FeaturedRecipesContext.Provider
      value={{ featuredRecipes, setFeaturedRecipes }}
    >
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
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
              name="Home"
              component={Home}
              options={{ headerLeft: null, gestureEnabled: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerLeft: (props) => <BackButton {...props} /> }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </FeaturedRecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
