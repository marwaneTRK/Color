import About from "./components/apiPage/About";
import HomePage from "./components/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import {} from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
