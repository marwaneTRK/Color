import Layout from "../Layout";
import ColorPalette from "./ColorPalette";
import PaletteControl from "./PaletteControl";

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
