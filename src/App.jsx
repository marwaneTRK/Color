import About from "./components/apiPage/About";
import { ColorProvider } from "./components/apiPage/ApiComponent/ColorContext";
import HomePage from "./components/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import {} from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <ColorProvider>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ColorProvider>
    </HashRouter>
  );
};

export default App;
