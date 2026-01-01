import Layout from "../Layout";
import PaletteControl from "./PaletteControl";
import ColorPalette from "./ColorPalette";
const About = () => {
  return (
    <Layout>
      <main className="flex-1 flex flex-col ">
        <PaletteControl />
        <ColorPalette />
      </main>
    </Layout>
  );
};

export default About;
