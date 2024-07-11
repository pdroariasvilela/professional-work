import { information } from "../config";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ViewWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = information[0].typeJobs;

  return (
    <div className="bg-black relative lg:w-[50%] m-auto">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-hover text-lg font-semibold"
      >
        What Can I Do For You
      </h1>

      {projects.map((project, index) => (
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          key={index}
          className="w-full border-[2px] border-solid border-stone-700 rounded-2xl p-5 my-5 hover:shadow-sm hover:shadow-primary_yellow"
        >
          <h1 className="text-primary_yellow text-start text-lg">
            {project.title}
          </h1>
          <p className="text-white text-sm text-start my-3">{project.info}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewWorks;
