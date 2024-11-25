import { useState } from "react";
import ReactProjects from "../components/ReactProjects";
import LaravelProjects from "../components/LaravelProjects";
import JavascriptProject from "./JavascriptProject";
import PhpProjects from "./PhpProjects";

const Technologies = () => {
  const [selectedProjects, setSelectedProjects] = useState(null);

  return (
    <>
      <div className="flex justify-center items-center h-[45vh]">
        <div className="flex items-center gap-20">
          <div className="flex flex-col items-center">
            <img
              onClick={() => setSelectedProjects("react")}
              className="md:w-20 hover:animate-rotate360 hover:opacity-50 hover:cursor-pointer"
              src="images/react.png"
              alt="logo reactjs"
            />
            <p>React.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              onClick={() => setSelectedProjects("laravel")}
              className="md:w-20 hover:opacity-50 hover:cursor-pointer"
              src="images/Laravel.svg.png"
              alt="laravel logo"
            />
            <p>Laravel</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              onClick={() => setSelectedProjects("php")}
              className="md:w-40 hover:opacity-50 hover:cursor-pointer"
              src="images/php.png"
              alt="php logo"
            />
            <p>Php</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              onClick={() => setSelectedProjects("javascript")}
              className="md:w-20 hover:opacity-50 hover:cursor-pointer"
              src="images/js.png"
              alt="javascript logo"
            />
            <p>Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              onClick={() => setSelectedProjects("vue")}
              className="md:w-20 hover:opacity-50 hover:cursor-pointer"
              src="images/vuejs.png"
              alt="vuejs logo"
            />
            <p>Vue.js</p>
          </div>
        </div>
      </div>
      {selectedProjects === "react" && <ReactProjects />}
      {selectedProjects === "laravel" && <LaravelProjects />}
      {selectedProjects === "javascript" && <JavascriptProject />}
      {selectedProjects === "php" && <PhpProjects />}
    </>
  );
};
export default Technologies;
