import "./App.css";
import Mask from "./img/Mask-group.png"

import NavBar from "./Components/navBar";
import ButtonPrimay from "./Components/ButtonPrimay";
import { information } from "./config";
import SectionIcons from "./Components/SectionIcons";
import CardsProyect from "./Components/CardsProyect";
import ViewWorks from "./Components/ViewWorks";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col justify-between relative">
        <div className="w-[90%] m-auto relative z-10">
          <NavBar />
          <div className="flex flex-col w-full justify-evenly px-4 my-4">
            <div className="bg-secondary w-[250px] items-center justify-center inline-flex gap-5 px-5 py-1 rounded-2xl my-5">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <p className="text-white">Available for new project</p>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-white text-custom-48 font-bold md:text-md lg:text-custom-88 font-inter text-start leading-tight">
                Frontend & Mobile Developer
              </h1>
            </div>
            {information.map((info, index) => (
              <p className="text-white font-inter text-base text-start my-5" key={index}>
                {info.jobs.descriptionEnglish}
              </p>
            ))}
            <ButtonPrimay>Contact Me</ButtonPrimay>

            <SectionIcons />
            <CardsProyect />
            <ViewWorks />
          </div>
        </div>
        <img src={Mask} className="absolute inset-0 m-auto z-0 mt-[200px] w-full h-auto" alt="" />
      </div>
      <ContactMe MaskBG={Mask} />
    </>
  );
}

export default App;
