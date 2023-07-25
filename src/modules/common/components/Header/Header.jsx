import { Link, NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header className="border-b-2 border-gray-600 py-2">
      <div className="container  mx-auto flex items-center ">
        <Link
          to="/"
          className="text-3xl font-bold text-blue-800 uppercase mr-12"
        >
          Logo
        </Link>
        <nav className="hidden md:block">
          <ul className="flex font-semibold gap-x-2">
            <li>
              <NavLink className="hover:text-blue-800" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-blue-800" to="calculators">
                Calculators
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="ml-auto md:hidden" type="button ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
