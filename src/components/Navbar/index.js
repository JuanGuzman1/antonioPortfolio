import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [pressToggle, setPressToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const nav = useRef();

  const onIntersection = (e) => {
    console.log(e.currentTarget);
    const domRect = nav.current.getBoundingClientRect();
    if (domRect.top <= 0) {
      setIsVisible(true);
    }
    if (e.currentTarget.scrollY <= 260) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => onIntersection(e));
  }, []);

  return (
    <nav
      className={`${
        isVisible ? "md:fixed" : ""
      } bg-transparent w-full block z-10`}
      ref={nav}
    >
      <div className="flex justify-between flex-1">
        <button
          onClick={() => setPressToggle(!pressToggle)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${pressToggle ? "" : "hidden"} w-full md:block`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-stone-500 md:justify-center">
            <li>
              <Link
                to="/ "
                className="block py-2 pr-4 pl-3 text-red-700 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                to={"/unreal-portfolio"}
                className="block py-2 pr-4 pl-3 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Unreal Projects
              </Link>
            </li>
            <li>
              <Link
                to="/3d-portfolio"
                className="block py-2 pr-4 pl-3 text-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                3D Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
