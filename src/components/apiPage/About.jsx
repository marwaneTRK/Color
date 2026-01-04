import Layout from "../Layout";
import PaletteControl from "./PaletteControl";
import ColorPalette from "./ColorPalette";
import { useContext, useEffect, useState } from "react";
import { ColorContext } from "./ApiComponent/ColorContext";

const About = () => {
  const { setColor, userColor } = useContext(ColorContext);

  useEffect(() => {
    if (!userColor?.color) return;

    fetch(
      `https://www.thecolorapi.com/scheme?hex=${userColor.color.replace(
        "#",
        ""
      )}&mode=${userColor.mode.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.colors) setColor(data.colors);
      })
      .catch((err) => console.error(err));
  }, [userColor.color, setColor, userColor.mode]);

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

// useEffect(() => {
//   fetch(
//     `https://www.thecolorapi.com/scheme?hex=${userColor.color}&mode=analogic`
//   )
//     .then(res => res.json())
//     .then(data => setColor(data.colors));
// }, [userColor.color, setColor]);
