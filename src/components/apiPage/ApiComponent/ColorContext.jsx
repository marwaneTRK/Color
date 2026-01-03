import { createContext, useState, useMemo } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [selected, setSelected] = useState("Monochrome");
  const [color, setColor] = useState([]);
  const [userColor, setUserColor] = useState({ color: "F55A5A", mode: "" });

  const value = useMemo(
    () => ({
      selected,
      setSelected,
      color,
      setColor,
      userColor,
      setUserColor,
    }),
    [selected, color, userColor]
  );

  console.log("context has changed");

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
