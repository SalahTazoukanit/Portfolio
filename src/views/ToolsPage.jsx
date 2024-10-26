import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftBlock from "../components/LeftBlock";
import Tools from "../components/Tools";

const ToolsPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 ">
        <LeftBlock />
        <Tools />
      </div>
      <Footer />
    </>
  );
};
export default ToolsPage;
