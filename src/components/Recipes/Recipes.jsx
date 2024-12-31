import { useEffect, useState } from "react";
import Cooking from "../Cooking/Cooking";
import Recipe from "../Recipe/Recipe";
import { ToastContainer, toast, Bounce } from "react-toastify";

import {
  addRecipeToLS,
  removeRecipeFromLS,
  getWantToCookRecipeItem,
} from "../../utilities/localstorage";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // Load cart from local storage
  useEffect(() => {
    const storedItems = getWantToCookRecipeItem();
    const savedItems = recipes.filter((recipe) =>
      storedItems.includes(recipe.id)
    );
    setCooking(savedItems);
  }, [recipes]);

  const handleCooking = (id) => {
    const existingItem = cooking.find((item) => item.id === id);
    if (existingItem) {
      toast.error("Recipe item already added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      const itemToAdd = recipes.find((recipe) => recipe.id === id);
      if (itemToAdd) {
        const updatedCooking = [...cooking, itemToAdd];
        setCooking(updatedCooking);
        addRecipeToLS(id);
      }
    }
  };

  const handleRemoveItemFromCooking = (id) => {
    const updatedCooking = cooking.filter((item) => item.id !== id);
    setCooking(updatedCooking);
    removeRecipeFromLS(id);
  };

  return (
    <div className="container mx-auto py-12">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <div className="mx-auto w-2/3 mb-12">
        <h1 className="font-lexend font-semibold text-4xl text-black text-center">
          Our Recipes
        </h1>
        <p className="font-lexend font-normal text-base text-[#150B2B99] text-center mt-6">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>

      <div className="flex gap-6">
        <div className="w-2/3 grid md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              handleCooking={handleCooking}
            />
          ))}
        </div>
        <div className="w-1/3">
          <Cooking
            cooking={cooking}
            recipes={recipes}
            handleRemoveItemFromCooking={handleRemoveItemFromCooking}
          />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
