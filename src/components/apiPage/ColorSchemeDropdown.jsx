import { useContext, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { ColorContext } from "./ApiComponent/ColorContext";

export default function ColorSchemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Analogic");
  const { setUserColor } = useContext(ColorContext);

  const options = [
    "Monochrome",
    "Monochrome-dark",
    "Monochrome-light",
    "Analogic",
    "Complement",
    "Analogic-complement",
    "Triad",
    "quad",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);

    setUserColor((prev) => ({
      ...prev,
      mode: option,
    }));
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 ">
      <div className="relative">
        {/* Dropdown dial Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-2 bg-white border-2 border-[#687385] rounded-2xl flex items-center justify-between text-left text-xl hover:border-gray-400 transition-colors"
        >
          <span className="text-gray-900">{selected}</span>
          <ChevronDown
            className={`w-6 h-6  transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown dial MEnu*/}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-2xl shadow-lg overflow-hidden z-10">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full px-6 py-4 text-left text-xl hover:bg-gray-300 transition-colors flex items-center justify-between group"
              >
                <span className="text-gray-900">{option}</span>
                {selected === option && (
                  <Check className="w-6 h-6 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* bash tlckliki outside wi tssd */}
      {isOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
