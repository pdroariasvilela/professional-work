import { useState } from 'react';
import Logo from "../img/LGOPEDROSINFONDO.png";
import ButtonPrimay from "./ButtonPrimay";
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-black flex items-center justify-center fixed top-0 left-0 z-50 shadow-md shadow-slate-900">
      <div className="w-[90%] h-16 flex justify-between items-center px-4">
        <div className="h-12 w-12">
          <img src={Logo} alt="Logo" className="" />
        </div>

        <div className="hidden md:flex text-white gap-4 font-semibold items-center">
          <button>Resume</button>
          <p>|</p>
          <button>About me</button>
          <p>|</p>
          <button>Projects</button>
          <p>|</p>
          <button>Blog</button>
        </div>
        <div className="hidden md:block">
          <ButtonPrimay>Contact Me 👋</ButtonPrimay>
        </div>

        <div className="block md:hidden absolute right-4">
          {isMenuOpen ? (
            <CloseOutlined onClick={toggleMenu} className="text-white text-2xl cursor-pointer" />
          ) : (
            <MenuOutlined onClick={toggleMenu} className="text-white text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center text-white md:hidden z-40 pb-3 shadow-md shadow-slate-900">
          <button className="py-2">Resume</button>
          <button className="py-2">About me</button>
          <button className="py-2">Projects</button>
          <button className="py-2">Blog</button>
          <ButtonPrimay>Contact Me 👋</ButtonPrimay>
        </div>
      )}
    </div>
  );
};

export default NavBar;
