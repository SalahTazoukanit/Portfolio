const Tools = () => {
  return (
    <>
      <div className="tools mt-20">
        <h1 className="text-white max-sm:text-[40px]">TECHNOLOGIES</h1>
        <h1 className="text-zinc-500 max-sm:text-[40px]">OUTILS</h1>
        <div className="flex flex-col md:flex-row w-11/12 mt-10 gap-5">
          <div className="flex flex-col md:w-1/2">
            <div className="project rounded-md flex gap-5 p-5">
              <div className="flex justify-center bg-white rounded-md w-24 h-20">
                <img src="images/php.png" alt="php logo" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white max-sm:text-[20px]">Php</h3>
                <p className="text-zinc-500">Langage de programmation</p>
              </div>
            </div>
            <div className="project rounded-md flex gap-5 p-5">
              <div className="flex justify-center items-center bg-white rounded-md w-24 h-20">
                <img
                  className="w-12 h-12"
                  src="images/Laravel.svg.png"
                  alt="laravel logo"
                />
              </div>
              <div className="project rounded-md flex flex-col">
                <h3 className="text-white max-sm:text-[20px]">Laravel</h3>
                <p className="text-zinc-500">Framework Php</p>
              </div>
            </div>
            <div className="project rounded-md flex gap-5 p-5">
              <div className="flex justify-center items-center bg-white rounded-md w-24 h-20">
                <img
                  className="w-12 h-12"
                  src="images/mysql.png"
                  alt="mysql logo"
                />
              </div>
              <div className="project rounded-md flex flex-col">
                <h3 className="text-white max-sm:text-[20px]">MySql</h3>
                <p className="text-zinc-500">Gestionnaire de bdd</p>
              </div>
            </div>
            <div className="project rounded-md flex gap-5 p-5">
              <div className="flex justify-center items-center bg-white rounded-md w-24 h-20">
                <img
                  className="w-12 h-12"
                  src="images/figma.png"
                  alt="figma logo"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white max-sm:text-[20px]">Figma</h3>
                <p className="text-zinc-500">Outil de design</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2">
            <div className="project rounded-md flex gap-5 p-5">
              <div className="flex justify-center items-center bg-white rounded-md w-24 h-20">
                <img
                  className="w-12 h-12"
                  src="public/images/js.png"
                  alt="javascript logo"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white max-sm:text-[20px]">Javascript</h3>
                <p className="text-zinc-500">Langage de programmation</p>
              </div>
            </div>
            <div className="project rounded-md flex gap-5 p-5">
              <div className="flex justify-center items-center bg-white rounded-md w-24 h-20">
                <img
                  className="w-12 h-12 hover:animate-rotate360"
                  src="images/react.png"
                  alt="react.js logo"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white max-sm:text-[20px]">React.js</h3>
                <p className="text-zinc-500">Framework Javascript</p>
              </div>
            </div>
            <div className="project rounded-md flex gap-5 p-5">
              <div className="flex justify-center items-center bg-white rounded-md w-24 h-20">
                <img
                  className="w-12 h-12"
                  src="images/tailwind.png"
                  alt="tailwind css logo"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white max-sm:text-[20px]">Tailwind Css</h3>
                <p className="text-zinc-500">Framework Css</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tools;
