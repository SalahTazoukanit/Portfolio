const ReactProjects = () => {
  return (
    <>
      <div className="flex max-sm:mx-10">
        <div className="flex flex-col justify-center md:flex-row text-black">
          <a
            className="flex flex-col items-center p-5 gap-5"
            href="https://sportifyevents.netlify.app/"
            target="blank"
          >
            <div className="md:w-1/6 bg-white rounded-xl hover:opacity-50">
              <div
                className=""
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <img
                  className="rounded-t-lg "
                  src="images/sportify-screen.png"
                  alt="sportify image"
                />
              </div>
              <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  Sportify
                </h5>
                <p className="mb-4 text-[10px] md:text-xs">
                  Application de création d'événements sportifs avec interface
                  utilisateur dévéloppé en React.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default ReactProjects;
