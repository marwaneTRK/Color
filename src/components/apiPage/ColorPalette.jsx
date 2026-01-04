import { useContext, useState } from "react";
import CopyIcon from "../../imgs/btn/copyIcon.svg?react";
import { ColorContext } from "./ApiComponent/ColorContext";

const ColorPalette = () => {
  const { color = [] } = useContext(ColorContext);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (value, index) => {
    if (!value) return;

    navigator.clipboard.writeText(value);
    setCopiedIndex(index);

    setTimeout(() => setCopiedIndex(null), 900);
  };

  return (
    <div className="flex-8 flex flex-col md:flex-row">
      {color.map((c, index) => (
        <div
          key={c.hex?.value || index}
          className="relative flex-1 flex flex-col justify-center items-center text-[#000000] cursor-pointer"
          style={{ backgroundColor: c.hex?.value }}
          onClick={() => handleCopy(c.hex?.value, index)}
        >
          {/* Animated feedback */}
          {copiedIndex === index && (
            <span
              className="absolute top-4 px-3 py-1 text-sm font-semibold text-white bg-black/80 rounded-full
                             animate-[fadeInScale_0.3s_ease-out]"
            >
              Copied ✓
            </span>
          )}

          <CopyIcon />
          <p className="font-medium">{c.hex?.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
