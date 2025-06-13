import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "navbar.title": "angelbladeX technologies",
      
      "hero.title": "Hello, I'm Angel Gabriel Ortega",
      "hero.subtitle": "In the vast technological universe, I define myself as a passionate explorer. As a software engineering student and backend developer, my focus is on creating applications that combine the arts of this field. Currently, I aspire to contribute to a company all the knowledge and skills I'm acquiring throughout my career.",
      "hero.contact": "Contact me",
      
      "technologies.title": "Technologies",
      
      "projects.title": "Projects",
      "projects.demo": "Demo",
      "projects.repository": "Repository",
      "projects.description": "Description",
      "projects.technologies": "Technologies used",
      
      "contact.title": "Contact",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.submit": "Send Message via WhatsApp",
      
      "modal.close": "Close",
      "modal.viewDemo": "View Demo",
      "modal.viewRepo": "View Repository",
      
      "footer.copyright": "© {{year}} Angel|Bladex. All rights reserved.",

        "projects.crimeio.title": "Crime.io",
      "projects.crimeio.description": "Final project for the statistics course, designed to predict the probability of a crime occurring in a specific area of the city using historical data and interactive visualizations. In San Francisco, USA, this project uses a linear regression model to predict crime probabilities. It was also used in an AI hackathon where it won third place.",
      
      "projects.avt.title": "AVT Transactions",
      "projects.avt.description": "Final project for Software Development 2 course. This is a transaction management system that allows users to add, delete, edit and view transactions, assigning priority to each transaction and marking them as completed, with OTP validation via QR code and email notifications.",
      
      "projects.alura.title": "Alura Forums",
      "projects.alura.description": "Final project for Oracle One Education preparation. This is a forum system that allows users to add, delete, edit and view forums, with a strong security and authentication system using Spring Security, JWT and OAuth2.",
      
      "projects.spaceinvaders.title": "Space Invaders",
      "projects.spaceinvaders.description": "Final project for Programming 3 course. This is a Space Invaders game using vanilla C# with WinForms, implementing learned concepts like the MVVM pattern and strong OOP abstraction.",
      
      "projects.cis.title": "CIS Project",
      "projects.cis.description": "Final project for Software Development 3 course. This is an idea, topic and vote management system using Spring Boot, Hibernate, MySQL, JWT, Swagger, .NET Core and MongoDB. It applies initial microservices concepts with a hexagonal architecture and strong security/authentication system using Spring Security and JWT."
    }
  },
  es: {
    translation: {
      "navbar.title": "angelbladeX technologies",
      
      "hero.title": "Hola, soy Angel Gabriel Ortega",
      "hero.subtitle": "En el vasto universo tecnológico, me defino como un explorador apasionado. Como estudiante de ingeniería de software y desarrollador backend, mi trayectoria se centra en crear aplicaciones que combinen las artes de este campo. Actualmente, aspiro a aportar a una empresa todos los conocimientos y habilidades que estoy adquiriendo a lo largo de mi carrera.",
      "hero.contact": "Contáctame",
      
      "technologies.title": "Tecnologías",
      
      "projects.title": "Proyectos",
      "projects.demo": "Demo",
      "projects.repository": "Repositorio",
      "projects.description": "Descripción",
      "projects.technologies": "Tecnologías utilizadas",
      
      "contact.title": "Contacto",
      "contact.name": "Nombre",
      "contact.email": "Email",
      "contact.message": "Mensaje",
      "contact.submit": "Enviar Mensaje por WhatsApp",
      
      
      "modal.close": "Cerrar",
      "modal.viewDemo": "Ver Demo",
      "modal.viewRepo": "Ver Repositorio",
      
      "footer.copyright": "© {{year}} Angel|Bladex. Todos los derechos reservados.",

       "projects.crimeio.title": "Crime.io",
      "projects.crimeio.description": "Proyecto final de la asignatura estadística, diseñado para predecir la probabilidad de que un crimen ocurra en una zona determinada de la ciudad, utilizando datos históricos y visualizaciones interactivas. En San Francisco, EE.UU., este proyecto utiliza un modelo de regresión lineal para predecir probabilidades de crimen. También participó en un hackathon de IA donde obtuvo el tercer lugar.",
      
      "projects.avt.title": "Transacciones AVT",
      "projects.avt.description": "Proyecto final de la asignatura Desarrollo de Software 2. Es un sistema de gestión de transacciones que permite al usuario añadir, eliminar, editar y visualizar transacciones, asignando prioridades y marcándolas como completadas, con validación OTP mediante QR code y notificaciones por email.",
      
      "projects.alura.title": "Foros Alura",
      "projects.alura.description": "Proyecto final de la preparación Oracle One Education. Sistema de foros que permite agregar, eliminar, editar y ver foros, con un robusto sistema de seguridad y autenticación usando Spring Security, JWT y OAuth2.",
      
      "projects.spaceinvaders.title": "Invasores del Espacio",
      "projects.spaceinvaders.description": "Proyecto final del curso Programación 3. Juego de Invasores del Espacio desarrollado en C# con WinForms, implementando conceptos aprendidos como el patrón MVVM y fuerte abstracción con POO.",
      
      "projects.cis.title": "Proyecto CIS",
      "projects.cis.description": "Proyecto final de la asignatura Desarrollo de Software 3. Sistema de administración de ideas, tópicos y votos usando Spring Boot, Hibernate, MySQL, JWT, Swagger, .NET Core y MongoDB. Aplica conceptos iniciales de microservicios con arquitectura hexagonal y sistema de seguridad/autenticación robusto usando Spring Security y JWT."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;