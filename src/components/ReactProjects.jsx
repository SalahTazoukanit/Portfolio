const ReactProjects = () => {
  return (
    <>
      <div className="flex justify-center w-full max-sm:mx-10">
        <div className="md:w-1/6 flex flex-col justify-center md:flex-row text-black">
          <a
            className="flex flex-col items-center p-5 gap-5"
            href="https://sportifyevents.netlify.app/"
            target="blank"
          >
            <div className=" bg-white rounded-xl hover:opacity-50 md:h-[28vh]">
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
        <div className="md:w-1/6 flex flex-col justify-center md:flex-row text-black">
          <a
            className="flex flex-col items-center p-5 gap-5"
            href="https://chefhamzatazoukanit.netlify.app/"
            target="blank"
          >
            <div className=" bg-white rounded-xl hover:opacity-50 md:h-[28vh]">
              <div
                className=""
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <img
                  className="rounded-t-lg "
                  src="/images/hamza-project.png"
                  alt="image portfolio Chef Tazoukanit H."
                />
              </div>
              <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  Chef Tazoukanit H.
                </h5>
                <p className="mb-4 text-[10px] md:text-xs">
                  Site vitrine / Portfolio pour un Chef cuisine .
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
