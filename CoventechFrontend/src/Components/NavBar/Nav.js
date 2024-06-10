import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";

function Nav() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 nav">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          smooth={true}
          duration={800}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <img src={logo} className="h-8" alt="Coventech Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Co-ventech
          </span>
        </Link>
        </div>
        </nav>
  );
}
export default Nav;