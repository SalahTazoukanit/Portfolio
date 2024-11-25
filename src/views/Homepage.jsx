import Contact from "../components/Contact";
import Cv from "../components/Cv";
import FirstContent from "../components/FirstContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftBlock from "../components/LeftBlock";
import Projects from "../components/Projects";
import Tools from "../components/Tools";

const Homepage = () => {
  return (
    <>
      <div className="mx-5">
        <Header />
        <div className="flex flex-col md:flex-row justify-center w-full mt-10 gap-10">
          <LeftBlock />
          <div className="flex flex-col w-full md:w-2/4">
            <FirstContent />
            <Projects />
            <Tools />
            <Cv />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Homepage;
