import CardIMC from "../src/img/imc.png";
import GTHome from "../src/img/get-that-home.png";
import YachAI from "../src/img/provedy.png";
import Opencart from "../src/img/opencart.png";

export const information = [{
    personalData: {
        fullName: "Pedro Arias Vilela",
        age: "26",
        country: "Perú",
        city: "Lima"
    },
    jobs: {
        frontend: ["React.js", "React Native", "JavaScript", "Tailwindcss", "Next"],
        backend: ["Prisma", "Docker"],
        descriptionSpanish: "Hola, soy Pedro Arias, desarrollador web y móvil con React y React Native. Con 6 meses de experiencia, he creado sitios web responsivos y aplicaciones móviles. ¡Colaboremos para crear algo increíble!",
        descriptionEnglish: "Hi, I'm Pedro Arias, a React web and mobile developer with 6 months of experience. I've built responsive websites and mobile apps. Let's create something amazing together!"
    },
    projects:[
        {
          title: "Get that Home",
          description: "Get that home is a website inspired by Airbnb, featuring user authentication, filters, and API consumption.",
          image: GTHome,
          link: "https://github.com/pdroariasvilela/get-that-home-frontend-team2-web"
        },
        {
          title: "Tienda OpenCart - Mobile Web Application",
          description: "Tienda OpenCart is an e-commerce web platform designed to offer an exceptional online shopping experience.",
          image: Opencart,
          link: 'https://github.com/pdroariasvilela/Tienda-OpenCart'
        },
        {
          title: "Future IMC iOS Mobile",
          description: "This application allows users to enter their weight and height, then calculates and displays their BMI along with a corresponding category (e.g., Underweight, Normal weight, Overweight, Obesity).",
          image: CardIMC,
          link: "https://github.com/pdroariasvilela/IMC-Calculator-iOS"
        },
        {
          title: "YachAI Landing page",
          description: "Website created to advertise an AI that will help both students and teachers to create and solve tasks. Teachers can create assignments with questions related to the topic they are teaching, and students can answer these questions.",
          image: YachAI,
          link: "https://github.com/pdroariasvilela/Proveedy-Challenge-Frontend-PedroAriasVilela"
        },
      ],
    typeJobs:[
        {
            title : "Web Development",
            info:"I am available for new projects and offer comprehensive web development services, both in the frontend and backend. With expertise in the latest technologies and the most widely used frameworks, I ensure that your web application is modern, efficient, and scalable.",
        },
        {
            title : "Mobile Development",
            info:"I am available for new projects and offer comprehensive mobile development services, both for iOS and Android. With expertise in the latest technologies and the most widely used frameworks, I guarantee that your mobile application will be modern, efficient, and highly functional."
        }
    ]
}];
