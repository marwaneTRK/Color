import { createContext, useState, useMemo } from "react";

export const ColorContext = createContext(null);

export function ColorProvider({ children }) {
  const [color, setColor] = useState([]);
  const [userColor, setUserColor] = useState({
    color: "#F55A5A",
    mode: "analogic",
  });

  const value = useMemo(
    () => ({
      color,
      setColor,
      userColor,
      setUserColor,
    }),
    [color, userColor]
  );

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}
