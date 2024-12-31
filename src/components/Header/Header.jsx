import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto pt-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="text-3xl font-lexend font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          <div
            role="button"
            className="btn bg-[#0BE58A] hover:bg-[#0BE58A] btn-circle avatar ml-4"
          >
            <div className="rounded-full text-2xl">
              <FaRegUserCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
