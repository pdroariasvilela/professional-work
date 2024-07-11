import "./App.css";
import Mask from "./img/Mask-group.png";

import NavBar from "./Components/navBar";
import { information } from "./config";
import SectionIcons from "./Components/SectionIcons";
import CardsProyect from "./Components/CardsProyect";
import ViewWorks from "./Components/ViewWorks";
import ContactMe from "./Components/ContactMe";
import ButtonPrimay from "./Components/ButtonPrimay";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col justify-between relative">
        <div className="w-[90%] lg:w-[70%] md:w-[70%] m-auto relative z-10">
          <NavBar />

          <div className="flex flex-col w-full justify-evenly px-4 my-4 mt-[100px]">
            <div className="bg-secondary w-[250px] items-center justify-center inline-flex gap-5 px-5 py-1 rounded-2xl my-5 lg:relative lg:left-[80px]">
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              <p className="text-white">Available for new project</p>
            </div>

            <div className="lg:flex md:flex lg:relative lg:left-[80px]">
              <div className="flex items-center justify-center lg:absolute md:absolute lg:w-[900px] md:w-[500px] lg:mb-10 md:mb-10 xl:w-[1200px]">
                <h1 className="text-white text-custom-48 font-bold md:text-custom-48 lg:text-custom-88 font-inter text-start leading-tight">
                  Frontend & Mobile Developer
                </h1>
              </div>

              <div className="lg:p-4 md:p-4 lg:w-[420px] md:w-[420px] lg:relative md:relative lg:left-[500px] 2xl:left-[700px] lg:h-[250px] md:h-[250px] lg:top-[120px] md:top-[150px]">
                {information.map((info, index) => (
                  <p
                    className="text-white font-inter text-lg text-start my-5"
                    key={index}
                  >
                    {info.jobs.descriptionEnglish}
                  </p>
                ))}
                <div className="flex flex-col lg:flex md:flex lg:flex-row md:flex-row lg:items-center md:items-center lg:justify-start md:justify-start gap-6 items-start">
                  <SectionIcons />
                  <ButtonPrimay>Download CV</ButtonPrimay>
                </div>
              </div>
            </div>
            <CardsProyect />
            <ViewWorks />
          </div>
        </div>
        <img
          src={Mask}
          className="absolute inset-0 m-auto z-0 mt-[200px] w-[400px] h-auto md:w-[400px]"
          alt=""
        />
      </div>
      <ContactMe MaskBG={Mask} />
    </>
  );
}

export default App;
