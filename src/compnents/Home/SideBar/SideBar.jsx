import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="sticky top-0 min-h-dvh  ">
        <ul
          className=" mx-8 flex flex-col  justify- py-5 
        text-base font-normal gap-1 sticky top-0"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded ${isActive ? "font-semibold " : "font-normal"} px-2`
            }
          >
            <li className="hover:font-medium py-2">Home </li>
          </NavLink>
            <NavLink
              to="/a"
              className={({ isActive }) =>
                `rounded ${isActive ? "font-semibold " : "font-normal"} px-2`
              }
            >
          <li className="hover:font-medium py-2">
              TV
          </li>
            </NavLink>
          <li className="hover:font-medium py-2">Magazine</li>
          <li className="hover:font-medium py-2">Life Style</li>
          <li className="hover:font-medium py-2">India</li>
          <li className="hover:font-medium py-2">South</li>
          <li className="hover:font-medium py-2">World</li>
          <li className="hover:font-medium py-2">Business</li>
          <li className="hover:font-medium py-2">Life Style</li>
          <li className="hover:font-medium py-2">India</li>
          <li className="hover:font-medium py-2">India</li>

          <li className="hover:font-medium py-2">South</li>
          <li className="hover:font-medium py-2">World</li>
          <li className="hover:font-medium py-2">Business</li>
        </ul>
      </div>
    </>
  );
}
