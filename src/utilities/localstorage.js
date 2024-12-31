const getWantToCookRecipeItem = () => {
  const recipeItem = localStorage.getItem("want-to-cook-recipes");
  if (recipeItem) {
    return JSON.parse(recipeItem);
  }
  return [];
};

const saveRecipeToLS = (recipe) => {
  const recipeStringified = JSON.stringify(recipe);
  localStorage.setItem("want-to-cook-recipes", recipeStringified);
};

const addRecipeToLS = (id) => {
  const recipe = getWantToCookRecipeItem();
  recipe.push(id);

  // save to local storage
  saveRecipeToLS(recipe);
};

const removeRecipeFromLS = (id) => {
  const recipe = getWantToCookRecipeItem();
  // removing every ids
  const remaining = recipe.filter((idx) => idx !== id);
  saveRecipeToLS(remaining);
};

// Currently Cooking
const getCookingRecipeItem = () => {
  const recipeItem = localStorage.getItem("cooking-recipes");
  if (recipeItem) {
    return JSON.parse(recipeItem);
  }
  return [];
};

const saveCookingRecipeToLS = (recipe) => {
  const recipeStringified = JSON.stringify(recipe);
  localStorage.setItem("cooking-recipes", recipeStringified);
};

const addCookingRecipeToLS = (id) => {
  const recipe = getCookingRecipeItem();
  recipe.push(id);

  // save to local storage
  saveCookingRecipeToLS(recipe);
};

const removeCookingRecipeFromLS = (id) => {
  const recipe = getCookingRecipeItem();
  // removing every ids
  const remaining = recipe.filter((idx) => idx !== id);
  saveCookingRecipeToLS(remaining);
};

export {
  addRecipeToLS,
  getWantToCookRecipeItem,
  removeRecipeFromLS,
  addCookingRecipeToLS,
  getCookingRecipeItem,
  removeCookingRecipeFromLS,
};
