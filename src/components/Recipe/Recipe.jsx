import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleCooking }) => {
  // console.log(recipe);
  const {
    id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="p-6 border-[1px] border-[#28282833] rounded-2xl gap-6">
      <figure className="">
        <img
          src={recipe_image}
          alt="Shoes"
          className="rounded-xl h-[338px] w-full object-cover"
        />
      </figure>
      <div className="mt-6">
        <h3 className="mb-4 font-lexend font-semibold text-xl text-[#282828]">
          {recipe_name}
        </h3>
        <p className="mb-4 font-fira-sans font-normal text-base text-[#878787]">
          {short_description}
        </p>

        <div className="border-t-[1px] border-[#2828281A] pt-6 pb-4">
          <h3 className="mb-4 font-lexend font-medium text-lg text-[#282828]">
            Ingredients: {ingredients.length}
          </h3>
          <ul className="list-disc list-inside font-fira-sans font-normal text-base text-[#878787]">
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="border-t-[1px] border-[#2828281A] py-6">
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2 text-2xl">
              <CiClock2 />
              <span className="text-base">{preparing_time} minutes</span>
            </p>

            <p className="flex items-center gap-2 text-2xl">
              <AiOutlineFire />
              <span className="text-base">{calories} calories</span>
            </p>
          </div>
        </div>

        <div className="">
          <button
            onClick={() => handleCooking(id)}
            className="btn border-[#0BE58A] hover:border-[#0BE58A] bg-[#0BE58A] hover:bg-[#0BE58A] text-black rounded-full px-7 h-[49px] font-lexend font-medium text-lg"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleCooking: PropTypes.func,
};

export default Recipe;

// https://web.programming-hero.com/update-1/post/update-1-text-instruction-important-module-43-5-simple-react-bonus
