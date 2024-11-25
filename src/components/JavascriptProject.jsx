import React from "react";

function JavascriptProject() {
  return (
    <>
      <div className="flex justify-center w-full max-sm:mx-10">
        <div className="md:w-1/6 flex flex-col justify-center md:flex-row text-black">
          <a
            className="flex flex-col items-center p-5 gap-5"
            href="https://salahtazoukanit.github.io/pokedex/"
            target="blank"
          >
            <div className=" bg-white rounded-xl hover:opacity-50 md:h-[28vh]">
              <div
                className=""
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src="/images/pokedex.png"
                  alt="pokedex image"
                />
              </div>
              <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  Pokedex
                </h5>
                <p className="mb-4 text-[10px] md:text-xs">
                  Votre pokedex pour les amateurs de Pokemon , plus de 800
                  pokemon disponibles !!
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default JavascriptProject;
