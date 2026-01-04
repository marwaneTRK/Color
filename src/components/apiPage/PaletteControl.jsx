import ColorSchemeDropdown from "./ColorSchemeDropdown";
import PickSection from "./PickSection";

const PaletteControl = () => {
  return (
    <div className=" flex-2 flex flex-col justify-center items-center">
      <PickSection />
      <ColorSchemeDropdown />
    </div>
  );
};

export default PaletteControl;
