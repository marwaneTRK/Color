import Layout from "../Layout";
import PaletteControl from "./PaletteControl";
import ColorPalette from "./ColorPalette";
const About = () => {
  return (
    <Layout>
      <main className="flex-1 flex flex-col bg-red-500">
        <PaletteControl />
        <ColorPalette />
      </main>
    </Layout>
  );
};

export default About;
