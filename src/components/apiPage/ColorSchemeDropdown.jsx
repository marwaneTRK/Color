import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function ColorSchemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Monochrome");

  const options = [
    "Monochrome",
    "Monochrome-dark",
    "Monochrome-light",
    "Analogic",
    "Complement",
    "Analogic-complement",
    "Triad",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="relative">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between text-left text-xl hover:border-gray-400 transition-colors"
        >
          <span className="text-gray-900">{selected}</span>
          <ChevronDown
            className={`w-6 h-6 text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden z-10">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full px-6 py-4 text-left text-xl hover:bg-gray-50 transition-colors flex items-center justify-between group"
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

      {/* Click outside to close */}
      {isOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
