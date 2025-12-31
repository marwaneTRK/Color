import Layout from "./Layout";
import LeftHomePage from "./LeftHomePage";
import RightHomePage from "./RightHomePage";

const HomePage = () => {
  return (
    <Layout>
      <div className="h-fit w-full">
        <LeftHomePage />
      </div>
    </Layout>
  );
};

export default HomePage;
