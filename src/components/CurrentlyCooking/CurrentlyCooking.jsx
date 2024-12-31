import PropTypes from "prop-types";

const CurrentlyCooking = ({ currentlyCookingItem }) => {
  // console.log(currentlyCookingItem);

  const totalPreparingTime = currentlyCookingItem.reduce(
    (acc, item) => acc + parseInt(item.preparing_time),
    0
  );

  const totalCalories = currentlyCookingItem.reduce(
    (acc, item) => acc + parseInt(item.calories),
    0
  );

  return (
    <div className="mt-8">
      <div className="w-2/3 mx-auto">
        <h2 className="text-center font-lexend font-semibold text-2xl border-b-[1px] text-[#282828] pb-4">
          Currently cooking: {currentlyCookingItem.length}
        </h2>
      </div>
      <div className="pt-6">
        <table className="table">
          <thead>
            <tr className="font-fira-sans font-medium text-base text-[#878787]">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentlyCookingItem.length > 0 ? (
              currentlyCookingItem.map((item, idx) => (
                <tr
                  key={idx}
                  className="font-fira-sans font-normal text-base text-[#282828B3]"
                >
                  <td>{idx + 1}</td>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} minutes</td>
                  <td>{item.calories} calories</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="font-lexend font-medium text-base text-[#282828CC]">
              <td></td>
              <td></td>
              <td>
                Total Time =<br />
                {totalPreparingTime} minutes
              </td>
              <td>
                Total Calories =<br />
                {totalCalories} calories
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  currentlyCookingItem: PropTypes.array,
};

export default CurrentlyCooking;
