import Logo from "../img/LGOPEDROSINFONDO.png";

const NavBar = () => {
  return (
    <div className="w-full h-16 bg-black flex items-center justify-center">
      <div className="w-[90%] flex justify-evenly">
        <div className="h-12 w-12">
          <img src={Logo} alt="Logo" className="" />
        </div>

        <div className="flex text-white gap-4 font-semibold items-center">
          <button>Resume</button>
          <p>|</p>
          <button>Works</button>
          <p>|</p>
          <button>Bookmarks</button>
          <p>|</p>
          <button>Design Gallery</button>
        </div>

        <button className="bg-primary px-8 py-2 rounded-3xl">
          <h1 className="text-white font-semibold text-lg truncate">
            Contact Me 👋
          </h1>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
