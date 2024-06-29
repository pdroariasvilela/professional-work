import "./App.css";

import NavBar from "./Components/navBar";

function App() {
  return (
    <>
      <div className="bg-black w-full flex-col justify-center items-center ">
        <NavBar />
        <div className="flex-col items-center justify-center ">
          <div className=" bg-slate-500 items-center justify-center inline-flex gap-5 px-5 py-1 rounded-2xl">
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <p>Available for new project</p>
          </div>

          <div>
            <h1 className="text-white text-custom-88 font-inter">
              Full-Stack & Mobile Developer
            </h1>
          </div>
        </div> 
      </div>
    </>
  );
}

export default App;
