import NavBar from "./NavBar";
import whiteBG from "../imgs/background/whiteBG.svg";

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center overflow-x-hidden "
      style={{
        backgroundImage: `url(${whiteBG})`,
      }}
    >
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
