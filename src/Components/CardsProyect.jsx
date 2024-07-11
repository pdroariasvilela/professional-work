import React from 'react';
import { ExportOutlined } from '@ant-design/icons';
import { information } from '../config';

const CardsProyect = () => {
  const projects = information[0].projects;

  return (
    <div className="w-full flex flex-col items-center justify-center bg-black my-6 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center justify-center my-5">
            <img src={project.image} alt={`Project ${index + 1}`} className="w-[90%] my-5 rounded-2xl"/>
            <div className="w-[90%] flex text-start">
              <div className="w-[90%] flex flex-col text-white">
                <h2 className="font-semibold text-lg">{project.title}</h2>
                <p className="text-sm text-gray-500 mt-5">{project.description}</p>
              </div>
              <a href="">
                <ExportOutlined className="text-white text-2xl"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsProyect;
