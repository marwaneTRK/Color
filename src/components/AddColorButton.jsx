import BtnIcon from "../imgs/btn/btnIcon.svg?react";
import { useNavigate } from "react-router-dom";

const AddColorButton = () => {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/about");
  }
  return (
    <div className="group relative inline-flex justify-center items-center">
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

      <div className="relative inline-block p-0.75 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 transition-transform duration-300 group-hover:scale-105 group-active:scale-95 shadow-xl">
        <button
          className="flex items-center gap-3 md:gap-4 px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#1e1b28] group-hover:bg-[#2a2635] transition-colors cursor-pointer w-full h-full"
          onClick={handleLogin}
          aria-label="Add Color"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            <BtnIcon
              className="w-full h-full object-contain drop-shadow-md"
              aria-hidden="true"
            />
          </div>

          <span className="text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-sm whitespace-nowrap">
            Add Color
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddColorButton;
