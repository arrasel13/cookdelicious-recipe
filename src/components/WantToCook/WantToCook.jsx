import PropTypes from "prop-types";

const WantToCook = ({ cooking, handleCurrentlyCookingItem }) => {
  return (
    <div>
      <div className="w-2/3 mx-auto">
        <h2 className="text-center font-lexend font-semibold text-2xl border-b-[1px] text-[#282828] pb-4">
          Want to cook: {cooking.length}
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cooking.length > 0 ? (
              cooking.map((item, idx) => (
                <tr
                  key={idx}
                  className="font-fira-sans font-normal text-base text-[#282828B3]"
                >
                  <td>{idx + 1}</td>
                  <td>{item.recipe_name}</td>
                  <td>{item.preparing_time} minutes</td>
                  <td>{item.calories} calories</td>
                  <td>
                    <button
                      onClick={() => handleCurrentlyCookingItem(item.id)}
                      className="btn bg-[#0BE58A] h-[38px] rounded-full"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  cooking: PropTypes.array,
  handleCurrentlyCookingItem: PropTypes.func,
};

export default WantToCook;
