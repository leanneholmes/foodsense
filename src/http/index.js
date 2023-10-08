const { default: axios } = require("axios");

export const getRecipesList = async (tags, size) => {
  try {
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list",
      params: {
        from: "0",
        size: size || "20",
        tags: tags,
      },
      headers: {
        "X-RapidAPI-Key": "0133e6e807msh0045f08dba27ddep19d335jsn9321c3a4b6b4",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };
    return await axios.request(options);
  } catch (e) {
    console.log("error fetching recipes", e);
  }
};
