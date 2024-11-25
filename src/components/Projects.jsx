import { NavLink } from "react-router-dom";
import SeeMore from "./SeeMore";

const Projects = () => {
  const projects = [
    {
      title: "Chef Hamza Tazoukanit",
      description: "Site Vitrine / Portfolio pour un Chef Cuisine",
      image: "/images/hamza-project.png",
      url: "https://chefhamzatazoukanit.netlify.app/",
    },
    {
      title: "Sportify",
      description: "Application de création d'événements sportifs",
      image: "/images/sportify-screen.png",
      url: "https://sportifyevents.netlify.app/",
    },
    // {
    //   title: "",
    //   description: "",
    //   image: "",
    //   url: "",
    // },
  ];
  return (
    <>
      <div className="mt-20">
        <h1 className="text-white mb-5 max-sm:text-[40px]">
          {" "}
          DERNIERS PROJETS
        </h1>
        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <div key={index} className="project rounded-2xl">
              <a
                className="flex items-center p-5 gap-5"
                href={project.url}
                target="_blank"
              >
                <div className="rounded-2xl">
                  <img
                    className="w-48 h-20 md:w-64 md:h-40 rounded-2xl"
                    src={project.image}
                    alt={project.name + " image"}
                  />
                </div>
                <div>
                  <h3 className="text-white opacity-70 max-sm:text-[20px]">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <NavLink to={"all-projects"}>
        <SeeMore />
      </NavLink>
    </>
  );
};
export default Projects;
