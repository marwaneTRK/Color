import { useState } from "react";
import CopyIcon from "../../imgs/btn/pickIcon.svg?react";

const PickSection = () => {
  const [color, setColor] = useState("#F55A5A");
  return (
    <div className="pt-4 flex justify-between items-center">
      <div
        className="flex justify-center items-center border
      border-gray-400 rounded-4xl px-2 py-2 w-23 gap-2"
      >
        <div>
          <input
            type="color"
            id="pickColor"
            name="pickColor"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 border-2 border-[#E5E5E5]"
          />
        </div>
        <CopyIcon />
      </div>
      <p className="text-[13px] ml-2">Pick & Choose your color</p>
      <div
        className={`
            border-3 ml-4
      rounded-4xl px-2 py-1 w-23`}
        style={{ borderColor: color }}
      >
        <p className="text-center">{color}</p>
      </div>
    </div>
  );
};

export default PickSection;
