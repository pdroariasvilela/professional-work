import CardIMC from "../src/img/imc.png";
import GTHome from "../src/img/get-that-home.png";
import YachAI from "../src/img/provedy.png";
import Opencart from "../src/img/opencart.png";
import ACV from "../src/img/acv.png";

export const information = [
  {
    personalData: {
      fullName: "Pedro Arias Vilela",
      age: "26",
      country: "Perú",
      city: "Lima",
    },
    jobs: {
      frontend: [
        "React.js",
        "React Native",
        "JavaScript",
        "Tailwindcss",
        "Next",
      ],
      backend: ["Prisma", "Docker"],
      descriptionSpanish:
        "Hola, soy Pedro Arias, un desarrollador web y móvil con 1 año de experiencia. Trabajo principalmente con React y React Native, y he construido sitios web responsivos y aplicaciones móviles utilizando estas tecnologías. ¡Vamos a crear algo increíble juntos!",
      descriptionEnglish:
        "Hi, I'm Pedro Arias, a web and mobile developer with 1 year of experience. I primarily work with React and React Native, and I've built responsive websites and mobile apps using these technologies. Let's create something amazing together!",
    },
    projects: [
      {
        title: "ACV SAC CONTABILITY",
        description:
          "Website for an accounting firm built with React.js and Flowbite, featuring adjustable pricing options for services and an informational section about the company.",
        image: ACV,
        link: "https://acv-contability.vercel.app/",
      },
      {
        title: "Get that Home",
        description:
          "Get that home is a website inspired by Airbnb, featuring user authentication, filters, and API consumption.",
        image: GTHome,
        link: "https://github.com/pdroariasvilela/get-that-home-frontend-team2-web",
      },
      {
        title: "Tienda OpenCart - Mobile Web Application",
        description:
          "Tienda OpenCart is an e-commerce web platform designed to offer an exceptional online shopping experience.",
        image: Opencart,
        link: "https://github.com/pdroariasvilela/Tienda-OpenCart",
      },
      {
        title: "Future IMC iOS Mobile",
        description:
          "This application allows users to enter their weight and height, then calculates and displays their BMI along with a corresponding category (e.g., Underweight, Normal weight, Overweight, Obesity).",
        image: CardIMC,
        link: "https://github.com/pdroariasvilela/IMC-Calculator-iOS",
      },
      {
        title: "YachAI Landing page",
        description:
          "Website created to advertise an AI that will help both students and teachers to create and solve tasks. Teachers can create assignments with questions related to the topic they are teaching, and students can answer these questions.",
        image: YachAI,
        link: "https://github.com/pdroariasvilela/Proveedy-Challenge-Frontend-PedroAriasVilela",
      },
    ],
    typeJobs: [
      {
        title: "Web Development",
        info: "I am available for new projects and offer comprehensive web development services, both in the frontend and backend. With expertise in the latest technologies and the most widely used frameworks, I ensure that your web application is modern, efficient, and scalable.",
      },
      {
        title: "Mobile Development",
        info: "I am available for new projects and offer comprehensive mobile development services, both for iOS and Android. With expertise in the latest technologies and the most widely used frameworks, I guarantee that your mobile application will be modern, efficient, and highly functional.",
      },
    ],
  },
];
