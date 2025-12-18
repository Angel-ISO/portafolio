import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "navbar.title": "angelbladeX technologies",
      
      "hero.title": "Hello, I'm Angel Gabriel Ortega",
      "hero.subtitle": "Software Engineer with over two years of experience in full-stack development. Campuslands certified Software Development Technician (1,800 hours). Specialized in Oracle technologies and backend development. Active participant in hackathons and technology events. Oracle Cloud Infrastructure Certified. Passionate about technological innovation and solving complex problems through scalable solutions.",
      "hero.contact": "Contact me",
  
      "technologies.title": "Technologies Stack",
      "technologies.subtitle": "Tools and technologies I master to create innovative and scalable solutions",
      "technologies.frontend": "Frontend",
      "technologies.backend": "Backend",
      "technologies.database": "Database",
      "technologies.tools": "DevOps & Tools",
      "technologies.stats.technologies": "Technologies",
      "technologies.stats.experience": "Years Experience",
      "technologies.stats.categories": "Categories",
      "technologies.stats.projects": "Projects",
      
      "projects.title": "Projects",
      "projects.subtitle": "Projects I have developed",
      "projects.demo": "Demo",
      "projects.repository": "Repository",
      "projects.description": "Description",
      "projects.technologies": "Technologies used",
      "projects.stats.total": "Total Projects",
      "projects.stats.technologies": "Technologies",
      "projects.stats.featured": "Featured",
      "projects.stats.repositories": "Repositories",


      "contact.title": "Contact",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.subject": "Subject",
      "contact.phone": "Phone (Optional)",
      "contact.message": "Message",
      "contact.submit": "Send Message via WhatsApp",
      "contact.formTitle": "Have a project in mind?",
      "contact.formSubtitle": "Let's talk and make your ideas come true!",
      "contact.sendButton": "Send Message via WhatsApp",
      "contact.sending": "Sending...",
      "contact.validation.name": "Name is required",
      "contact.validation.email": "Please enter a valid email",
      "contact.validation.subject": "Subject is required",
      "contact.validation.message": "Message is required",
      "contact.success": "Message sent successfully! Opening WhatsApp...",
      "contact.characters": "Characters",
      "contact.maxCharacters": "Max 500 characters",
      
      "modal.close": "Close",
      "modal.viewDemo": "View Demo",
      "modal.viewRepo": "View Repository",
      
      "footer.title": "angelbladeX",
      "footer.description": "Backend developer passionate about creating innovative and scalable solutions. Transforming ideas into digital reality.",
      "footer.connect": "Let's Connect",
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
      "projects.cis.description": "Final project for Software Development 3 course. This is an idea, topic and vote management system using Spring Boot, Hibernate, MySQL, JWT, Swagger, .NET Core and MongoDB. It applies initial microservices concepts with a hexagonal architecture and strong security/authentication system using Spring Security and JWT.",

      "projects.pathfinder.title": "Path finderX",
      "projects.pathfinder.description": "Final project for Programming 4 where a route calculation management system was developed using functional programming and advanced practices such as intelligent cache management and the use of the Haversine equation with the A* algorithm for optimal and accurate performance.",
      "projects.pilex.title": "PileX",
      "projects.pilex.description": "Collaborative real-time drawing system integrating a REST API backend with WebSocket, a modern React frontend with advanced drawing tools, and adapted Agar.io game logic for collaborative drawing.",
      "projects.stellers.title": "Stellers E-Commerce",
      "projects.stellers.description": "E-commerce platform with backend API built using NestJS, GraphQL, and Hexagonal Architecture, featuring Supabase authentication, Prisma ORM, and a Svelte frontend for complete e-commerce functionality including product management and store operations.",
      "projects.clickup.title": "ClickUp Testing Framework",
      "projects.clickup.description": "Comprehensive API testing suite for ClickUp developed as the final project for Software Quality Engineering 3 course. Implements automated tests for functionality, performance, security, and reliability using Jest, Axios, and clean architecture principles."
    }
  },
  es: {
    translation: {
      "navbar.title": "angelbladeX technologies",
      
      "hero.title": "Hola, soy Angel Gabriel Ortega",
      "hero.subtitle": "Ingeniero de Software con más de dos años de experiencia en desarrollo full-stack. Técnico en Desarrollo de Software certificado por Campuslands (1,800 horas). Especializado en tecnologías Oracle y desarrollo backend. Participante activo en hackatones y eventos tecnológicos. Certificado en Oracle Cloud Infrastructure. Apasionado por la innovación tecnológica y la resolución de problemas complejos a través de soluciones escalables.",
      "hero.contact": "Contáctame",
      
      "technologies.title": "Tecnologías",
      "technologies.subtitle": "Herramientas y tecnologías que domino para crear soluciones innovadoras y escalables",
      "technologies.frontend": "Frontend",
      "technologies.backend": "Backend",
      "technologies.database": "Bases de datos",
      "technologies.tools": "DevOps & Herramientas",
      "technologies.stats.technologies": "Tecnologías",
      "technologies.stats.experience": "Años de Experiencia",
      "technologies.stats.categories": "Categorías",
      "technologies.stats.projects": "Proyectos",
      
      
      "projects.title": "Proyectos",
      "projects.subtitle": "Proyectos que he desarrollado",
      "projects.demo": "Demo",
      "projects.repository": "Repositorio",
      "projects.description": "Descripción",
      "projects.technologies": "Tecnologías utilizadas",
      "projects.stats.total": "Proyectos Totales",
      "projects.stats.technologies": "Tecnologías",
      "projects.stats.featured": "Destacados",
      "projects.stats.repositories": "Repositorios",
      

      
      "contact.title": "Contacto",
      "contact.name": "Nombre",
      "contact.email": "Email",
      "contact.subject": "Asunto",
      "contact.phone": "Teléfono (Opcional)",
      "contact.message": "Mensaje",
      "contact.submit": "Enviar Mensaje por WhatsApp",
      "contact.formTitle": "¿Tienes un proyecto en mente?",
      "contact.formSubtitle": "¡Hablemos y hagamos realidad tus ideas!",
      "contact.sendButton": "Enviar Mensaje por WhatsApp",
      "contact.sending": "Enviando...",
      "contact.validation.name": "El nombre es obligatorio",
      "contact.validation.email": "Por favor ingresa un email válido",
      "contact.validation.subject": "El asunto es obligatorio",
      "contact.validation.message": "El mensaje es obligatorio",
      "contact.success": "¡Mensaje enviado exitosamente! Abriendo WhatsApp...",
      "contact.characters": "Caracteres",
      "contact.maxCharacters": "Máximo 500 caracteres",

      
      
      "modal.close": "Cerrar",
      "modal.viewDemo": "Ver Demo",
      "modal.viewRepo": "Ver Repositorio",
      

      "footer.title": "angelbladeX",
      "footer.description": "Desarrollador Backend apasionado por crear soluciones innovadoras y escalables. Transformando ideas en realidad digital.",
      "footer.connect": "Conectemos",
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
      "projects.cis.description": "Proyecto final de la asignatura Desarrollo de Software 3. Sistema de administración de ideas, tópicos y votos usando Spring Boot, Hibernate, MySQL, JWT, Swagger, .NET Core y MongoDB. Aplica conceptos iniciales de microservicios con arquitectura hexagonal y sistema de seguridad/autenticación robusto usando Spring Security y JWT.",

      "projects.pathfinder.title": "Buscador de Rutas",
      "projects.pathfinder.description": "Proyecto final de programacion 4 donde se desarrollo de un sistema de gestion de calculo de rutas utilizando programacion funcional y practicas avanzadas como manejo de cache inteligente y uso de la ecuacion haversine con el algoritmo A* para el rendimiento optimo y certero",
      "projects.pilex.title": "PileX",
      "projects.pilex.description": "Sistema de dibujo colaborativo en tiempo real que integra un backend API REST con WebSocket, un frontend React moderno con herramientas de dibujo avanzadas, y lógica de juego Agar.io adaptada para dibujo colaborativo.",
      "projects.stellers.title": "Stellers E-Commerce",
      "projects.stellers.description": "Plataforma de comercio electrónico con API backend desarrollada en NestJS, GraphQL y Arquitectura Hexagonal, incluyendo autenticación Supabase, ORM Prisma y frontend en Svelte para funcionalidad completa de e-commerce con gestión de productos y operaciones de tienda.",
      "projects.clickup.title": "Framework de Testing ClickUp",
      "projects.clickup.description": "Suite completa de pruebas API para ClickUp desarrollada como proyecto final de la asignatura Ingeniería de Calidad de Software 3. Implementa pruebas automatizadas para funcionalidad, rendimiento, seguridad y confiabilidad usando Jest, Axios y principios de arquitectura limpia."
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