import PropTypes from "prop-types";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import WantToCook from "../WantToCook/WantToCook";
import { useState, useEffect } from "react";
import {
  addCookingRecipeToLS,
  getCookingRecipeItem,
} from "../../utilities/localstorage";

const Cooking = ({ recipes, cooking, handleRemoveItemFromCooking }) => {
  const [currentlyCookingItem, setCurrentlyCookingItem] = useState([]);

  // Load currently cooking items from local storage
  useEffect(() => {
    const storedItems = getCookingRecipeItem();
    const savedItems = recipes.filter((recipe) =>
      storedItems.includes(recipe.id)
    );
    setCurrentlyCookingItem(savedItems);
  }, [recipes]);

  // Handle adding items to "Currently Cooking"
  const handleCurrentlyCookingItem = (id) => {
    const foundItem = cooking.find((item) => item.id === id);
    if (foundItem) {
      const newCookingItems = [...currentlyCookingItem, foundItem];
      setCurrentlyCookingItem(newCookingItems);
      addCookingRecipeToLS(id);
      handleRemoveItemFromCooking(id);
    }
  };

  return (
    <div className=" p-8 border-[1px] border-[#28282833] rounded-2xl">
      <WantToCook
        cooking={cooking}
        handleCurrentlyCookingItem={handleCurrentlyCookingItem}
      />

      <CurrentlyCooking currentlyCookingItem={currentlyCookingItem} />
    </div>
  );
};

Cooking.propTypes = {
  recipes: PropTypes.array,
  cooking: PropTypes.array,
  handleRemoveItemFromCooking: PropTypes.func,
};

export default Cooking;
