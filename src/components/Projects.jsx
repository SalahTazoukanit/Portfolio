import { NavLink } from "react-router-dom";
import SeeMore from "./SeeMore";

const Projects = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-white mb-5 max-sm:text-[40px]">
          {" "}
          DERNIERS PROJETS
        </h1>
        <div className="flex flex-col gap-5">
          <div className="project rounded-2xl">
            <a
              className="flex items-center p-5 gap-5"
              href="https://sportifyevents.netlify.app/"
              target="blank"
            >
              <div>
                <img
                  className="w-48 h-20 md:w-64 md:h-40 rounded-2xl"
                  src="images/sportify-screen.png"
                  alt="image sportify"
                />
              </div>
              <div>
                <h3 className="text-white opacity-70 max-sm:text-[20px]">
                  Sportify
                </h3>
                <p className="text-zinc-400">
                  Application de création d'événements sportifs
                </p>
              </div>
            </a>
          </div>
          <div className="project rounded-2xl">
            <a
              className="flex items-center p-5 gap-5"
              href="https://sportifyevents.netlify.app/"
              target="blank"
            >
              <div>
                <img
                  className="w-48 h-20 md:w-64 md:h-40 rounded-2xl"
                  src="images/sportify-screen.png"
                  alt="image sportify"
                />
              </div>
              <div>
                <h3 className="text-white opacity-70 max-sm:text-[20px]">
                  Sportify
                </h3>
                <p className="text-zinc-400">
                  Application de création d'événements sportifs
                </p>
              </div>
            </a>
          </div>
          <div className="project rounded-2xl">
            <a
              className="flex items-center p-5 gap-5"
              href="https://sportifyevents.netlify.app/"
              target="blank"
            >
              <div>
                <img
                  className="w-48 h-20 md:w-64 md:h-40 rounded-2xl"
                  src="images/sportify-screen.png"
                  alt="image sportify"
                />
              </div>
              <div>
                <h3 className="text-white opacity-70 max-sm:text-[20px]">
                  Sportify
                </h3>
                <p className="text-zinc-400">
                  Application de création d'événements sportifs
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <NavLink to={"all-projects"}>
        <SeeMore />
      </NavLink>
    </>
  );
};
export default Projects;
