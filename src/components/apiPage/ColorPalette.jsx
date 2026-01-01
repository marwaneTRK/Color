import CopyIcon from "../../imgs/btn/copyIcon.svg?react";

const ColorPalette = () => {
  return (
    <div className="bg-blue-400 flex-8 flex flex-col">
      <div className="flex-1 bg-fuchsia-600 flex flex-col justify-center  items-center text-[#000000] ">
        <CopyIcon />
        <p className="font-medium text- ">#5A8DFF</p>
      </div>
      <div className="flex-1 bg-orange-500 flex flex-col justify-center  items-center text-[#000000]">
        <CopyIcon />
        <p className="font-medium text- ">#5A8DFF</p>
      </div>
      <div className="flex-1 bg-gray-500 flex flex-col justify-center  items-center text-[#000000]">
        <CopyIcon />
        <p className="font-medium text- ">#5A8DFF</p>
      </div>
      <div className="flex-1 bg-green-500 flex flex-col justify-center  items-center text-[#000000]">
        <CopyIcon />
        <p className="font-medium text- ">#5A8DFF</p>
      </div>
      <div className="flex-1 bg-yellow-500 flex flex-col justify-center  items-center text-[#000000]">
        <CopyIcon />
        <p className="font-medium text- ">#5A8DFF</p>
      </div>
    </div>
  );
};

export default ColorPalette;
