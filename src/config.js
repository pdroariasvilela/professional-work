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
    projects: [
        {
            title: "Get that Home",
            description: "Get that home es una página web inspirada en Airbnb , con autenticaciónde usuario , filtros , y consumo de API.",
            image: GTHome,
            link : "https://github.com/pdroariasvilela/get-that-home-frontend-team2-web"
        },
        {
            title : "Tienda OpenCart - Aplicación web para móviles",
            description: "Tienda OpenCart es una plataforma web de comercio electrónico diseñada para ofrecer una experiencia de compra en línea excepcional.",
            image : Opencart,
            link: 'https://github.com/pdroariasvilela/Tienda-OpenCart'
        },
        {
            title: "Future IMC iOS Mobile",
            description: "Esta aplicación permite a los usuarios ingresar su peso y altura, luego calcula y muestra su IMC junto con una categoría correspondiente (por ejemplo, Bajo peso, Peso normal, Sobrepeso, Obesidad).",
            image: CardIMC,
            link: "https://github.com/pdroariasvilela/IMC-Calculator-iOS"
        },
        {
            title: "YachAI Lading page",
            description: "App iOS 18",
            image: YachAI,
            link: "https://github.com/pdroariasvilela/Proveedy-Challenge-Frontend-PedroAriasVilela"
        },
    ] ,
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
