import React from "react";

function JavascriptProject() {
  const projects = [
    {
      image: "/images/pokedex.png",
      title: "Pokedex",
      description:
        "Votre pokedex pour les amateurs de Pokemon , plus de 800 pokemon disponibles !!",
      url: "https://salahtazoukanit.github.io/pokedex/",
    },
  ];
  return (
    <>
      <div className="flex justify-center w-full max-sm:mx-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="md:w-1/6 flex flex-col justify-center md:flex-row text-black"
          >
            <a
              className="flex flex-col items-center p-5 gap-5"
              href={project.url}
              target="_blank"
            >
              <div className=" bg-white rounded-xl hover:opacity-50 md:h-[28vh]">
                <div
                  className=""
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg "
                    src={project.image}
                    alt={project.title + " image"}
                  />
                </div>
                <div className="p-6 text-surface dark:text-white">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    {project.title}
                  </h5>
                  <p className="mb-4 text-[10px] md:text-xs">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default JavascriptProject;
