import { useContext } from "react";
import CopyIcon from "../../imgs/btn/copyIcon.svg?react";
import { ColorContext } from "./ApiComponent/ColorContext";

const ColorPalette = () => {
  const { color = [] } = useContext(ColorContext);

  return (
    <div className="bg-blue-400 flex-8 flex flex-col">
      {color.map((c, index) => (
        <div
          key={c.hex?.value || index}
          className="flex-1 flex flex-col justify-center items-center text-[#000000]"
          style={{ backgroundColor: c.hex?.value }}
        >
          <CopyIcon />
          <p className="font-medium">{c.hex?.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
