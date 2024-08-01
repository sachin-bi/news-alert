import Logo from "../presentational/Logo";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="drop-shadow-sm">
        <nav className="py-2.5 flex justify-around items-center drop-shadow-sm bg-white w-1024 ">
          <Logo />
          <span className="flex items-center rounded-none gap-x-2 ">
            <div className="rounded-xl border-2 border-sky-200 ">
              <form>
                <input
                  className=" outline-none rounded-xl px-2 py-1 "
                  placeholder="Search"
                  name="searchBox"
                  type="text"
                />
                <button className="outline-none px-2 py-1 hover:text-blue-500 ">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <div>
              <NavLink to="/login">
                {/* <button className="border rounded-lg bg-sky-600 text-white px-2 py-1">
                  Login
                </button> */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Login
                </button>
              </NavLink>
            </div>
          </span>
        </nav>
      </div>
    </>
  );
}
