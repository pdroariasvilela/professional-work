import Logo from "../img/LGOPEDROSINFONDO.png";
import ButtonPrimay from "./ButtonPrimay";

const NavBar = () => {
  return (
    <div className="w-full h-16 bg-black flex items-center justify-center">
      <div className="w-full flex justify-evenly">
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
        <ButtonPrimay>Contact Me 👋</ButtonPrimay>
      </div>
    </div>
  );
};

export default NavBar;
