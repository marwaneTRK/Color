import Layout from "../Layout";
import PaletteControl from "./PaletteControl";
import ColorPalette from "./ColorPalette";
import { useEffect, useState } from "react";

const About = () => {
  const [color, setColor] = useState([]);
  const [userColor, setUserColor] = useState({
    color: "F33A3A",
    mode: "",
  });

  useEffect(() => {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${userColor.color}&mode=analogic`
    )
      .then((res) => res.json())
      .then((data) => {
        setColor(data.colors);
      });
  }, []);
  return (
    <Layout>
      <main className="flex-1 flex flex-col ">
        <PaletteControl setColor={setColor} />
        <ColorPalette color={color} />
      </main>
    </Layout>
  );
};

export default About;
