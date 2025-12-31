import { Link } from "react-router-dom";
import PickItLogo from "../imgs/PickIt/pickitLogoDark.svg?react";
import DarkBtn from "../imgs/btn/dark.svg?react";

const NavBar = () => {
  return (
    <div
      className="h-16 relative border-b border-[#C3C3C3]
    flex justify-between px-4 md:px-8 items-center bg-transparent z-50"
    >
      <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
        <PickItLogo className="h-5 w-auto" aria-label="PickIt Home" />
      </Link>
      <button 
        className="hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full"
        aria-label="Toggle Theme"
      >
        <DarkBtn className="h-7 w-auto" />
      </button>
    </div>
  );
};

export default NavBar;
