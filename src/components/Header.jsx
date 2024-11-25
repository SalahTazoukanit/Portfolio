import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center p-5">
        <div className="max-sm:w-full flex flex-row justify-center items-center bg-gray-nav bg-opacity-50 rounded-2xl px-4 py-2 gap-10">
          <NavLink to={"/"}>
            <img
              className="w-6 hover:opacity-50"
              src="images/home.png"
              alt="logo accueil"
            />
          </NavLink>
          <NavLink to={"/all-projects"}>
            <img
              className="w-6 hover:opacity-50"
              src="images/folder-invoices.png"
              alt="logo projets"
            />
          </NavLink>
          <NavLink to={"/tools"}>
            <img
              className="w-6 hover:opacity-50"
              src="images/tool.png"
              alt="logo technologies"
            />
          </NavLink>
          <a href="/#contact">
            <img
              className="w-6 hover:opacity-50"
              src="images/contact.png"
              alt="logo contact"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
