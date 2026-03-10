import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "navbar.title": "angelbladeX technologies",
      "navbar.about": "About",
      "navbar.technologies": "Tech Stack",
      "navbar.projects": "Projects",
      "navbar.contact": "Contact",

      "hero.title": "Hello, I'm Angel Gabriel Ortega",
      "hero.subtitle": "Backend Engineer & Infrastructure Lead specializing in scalable APIs, cloud-native architectures, and automation. I transform complex problems into elegant, production-ready solutions.",
      "hero.contact": "Contact me",
      "hero.downloadCV": "Download CV",

      "about.title": "About Me",
      "about.subtitle": "Crafting scalable solutions from the backend",
      "about.description": "Software Engineer with 3+ years of hands-on experience building robust backend systems and managing cloud infrastructure. Campuslands certified Software Development Technician (1,800+ intensive hours) and Oracle Cloud Infrastructure certified professional. Hackathon winner with a passion for turning complex challenges into clean, scalable architectures. I thrive at the intersection of backend engineering, DevOps, and automation.",
      "about.experience.title": "Experience",
      "about.stats.experience": "Years Experience",
      "about.stats.projects": "Projects Delivered",
      "about.stats.clients": "Happy Clients",
      "about.stats.technologies": "Technologies",

      "about.experience.stellar.company": "Stellar - Colombian Technology",
      "about.experience.stellar.role": "Backend Developer & Infrastructure Lead",
      "about.experience.stellar.date": "May 2025 - Present",
      "about.experience.stellar.description": "Leading backend development and infrastructure management. Building REST APIs, managing dockerized deployments with Coolify, and orchestrating CI/CD pipelines.",

      "about.experience.freelance_ai.company": "Freelance",
      "about.experience.freelance_ai.role": "AI Automation Developer",
      "about.experience.freelance_ai.date": "Aug 2024 - Oct 2024",
      "about.experience.freelance_ai.description": "Built AI-powered conversational system for personalized training routines using n8n automation flows.",

      "about.experience.freelance_spartan.company": "Spartan Gym",
      "about.experience.freelance_spartan.role": "Full-Stack Developer",
      "about.experience.freelance_spartan.date": "May 2024 - Jul 2024",
      "about.experience.freelance_spartan.description": "Designed and deployed an e-commerce website for gym services using React.js.",

      "about.experience.campuslands.company": "Campuslands",
      "about.experience.campuslands.role": "Software Development Technician",
      "about.experience.campuslands.date": "Jan 2023 - Dec 2023",
      "about.experience.campuslands.description": "1,800+ hours intensive software development program. Backend development, clean code, agile methodologies.",

      "about.education.title": "Education",
      "about.education.jala.institution": "Jala University | USA",
      "about.education.jala.degree": "Commercial Software Engineering",
      "about.education.campuslands.institution": "Campuslands | Colombia",
      "about.education.campuslands.degree": "Software Development Technician",
      "about.education.alura.institution": "Alura Latam | Brazil",
      "about.education.alura.degree": "Professional Backend Developer",

      "technologies.title": "Tech Stack",
      "technologies.subtitle": "The tools and technologies I wield to build scalable, production-grade systems",
      "technologies.frontend": "Frontend",
      "technologies.backend": "Backend",
      "technologies.database": "Database",
      "technologies.tools": "DevOps & Tools",
      "technologies.stats.technologies": "Technologies",
      "technologies.stats.experience": "Years Experience",
      "technologies.stats.categories": "Categories",
      "technologies.stats.projects": "Projects",

      "projects.title": "Projects",
      "projects.subtitle": "Real-world solutions I've engineered from concept to deployment",
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
      "footer.description": "Backend engineer building the infrastructure behind scalable products. From APIs to CI/CD pipelines — I turn ideas into production-ready systems.",
      "footer.connect": "Let's Connect",
      "footer.copyright": "© {{year}} Angel|Bladex. All rights reserved.",

      "projects.crimeio.title": "Crime.io",
      "projects.crimeio.description": "Predictive crime analytics platform using historical data and interactive visualizations for San Francisco. Leverages a linear regression model to forecast crime probability by area. 🏆 3rd place winner at an AI hackathon.",

      "projects.avt.title": "AVT Transactions",
      "projects.avt.description": "Enterprise-grade transaction management system with priority queuing, OTP validation via QR code, and real-time email notifications. Full CRUD operations with robust state management.",

      "projects.alura.title": "Alura Forums",
      "projects.alura.description": "Secure community forum platform built with Spring Boot, featuring enterprise-level authentication using Spring Security, JWT, and OAuth2. Complete with role-based access control.",

      "projects.spaceinvaders.title": "Space Invaders",
      "projects.spaceinvaders.description": "Classic Space Invaders reimagined in C# with WinForms, applying MVVM architecture and strong OOP principles for clean, maintainable game logic.",

      "projects.cis.title": "CIS Project",
      "projects.cis.description": "Microservices-based idea and voting management system built with Spring Boot, .NET Core, and MongoDB. Implements hexagonal architecture with robust security using Spring Security and JWT.",

      "projects.pathfinder.title": "Path finderX",
      "projects.pathfinder.description": "High-performance route calculation engine using functional programming, intelligent caching, and the Haversine equation paired with the A* algorithm for optimal pathfinding accuracy.",

      "projects.pilex.title": "PileX",
      "projects.pilex.description": "Real-time collaborative drawing platform combining a REST API with WebSocket for live sync, a React frontend with advanced drawing tools, and Agar.io-inspired multiplayer mechanics.",

      "projects.stellers.title": "Stellers E-Commerce",
      "projects.stellers.description": "Full-stack e-commerce platform powered by NestJS, GraphQL, and Hexagonal Architecture. Features Supabase auth, Prisma ORM, and a Svelte storefront with complete product and store management.",

      "projects.clickup.title": "ClickUp Testing Framework",
      "projects.clickup.description": "Comprehensive API testing suite for ClickUp covering functionality, performance, security, and reliability. Built with Jest, Axios, and clean architecture principles for maintainable test automation.",

      "projects.hotelex.title": "HoteleX",
      "projects.hotelex.description": "Full-stack hotel management and booking system built with Angular and NestJS. Features intelligent room suggestion engine, advanced search with filters by city, dates, guests and budget, JWT authentication, and a responsive UI with Angular Material."
    }
  },
  es: {
    translation: {
      "navbar.title": "angelbladeX technologies",
      "navbar.about": "Sobre mí",
      "navbar.technologies": "Tecnologías",
      "navbar.projects": "Proyectos",
      "navbar.contact": "Contacto",

      "hero.title": "Hola, soy Angel Gabriel Ortega",
      "hero.subtitle": "Ingeniero Backend & Líder de Infraestructura especializado en APIs escalables, arquitecturas cloud-native y automatización. Transformo problemas complejos en soluciones elegantes listas para producción.",
      "hero.contact": "Contáctame",
      "hero.downloadCV": "Descargar CV",

      "about.title": "Sobre Mí",
      "about.subtitle": "Construyendo soluciones escalables desde el backend",
      "about.description": "Ingeniero de Software con más de 3 años de experiencia práctica construyendo sistemas backend robustos y gestionando infraestructura en la nube. Técnico en Desarrollo de Software certificado por Campuslands (1,800+ horas intensivas) y profesional certificado en Oracle Cloud Infrastructure. Ganador de hackathones con pasión por convertir desafíos complejos en arquitecturas limpias y escalables. Me desarrollo en la intersección entre ingeniería backend, DevOps y automatización.",
      "about.experience.title": "Experiencia",
      "about.stats.experience": "Años de Experiencia",
      "about.stats.projects": "Proyectos Entregados",
      "about.stats.clients": "Clientes Satisfechos",
      "about.stats.technologies": "Tecnologías",

      "about.experience.stellar.company": "Stellar - Colombian Technology",
      "about.experience.stellar.role": "Desarrollador Backend & Líder de Infraestructura",
      "about.experience.stellar.date": "Mayo 2025 - Actualmente",
      "about.experience.stellar.description": "Liderando el desarrollo backend y la gestión de infraestructura. Construyendo APIs REST, gestionando despliegues dockerizados con Coolify y orquestando pipelines CI/CD.",

      "about.experience.freelance_ai.company": "Freelance",
      "about.experience.freelance_ai.role": "Desarrollador de Automatización IA",
      "about.experience.freelance_ai.date": "Ago 2024 - Oct 2024",
      "about.experience.freelance_ai.description": "Desarrollé un sistema conversacional potenciado por IA para rutinas de entrenamiento personalizadas usando flujos de automatización n8n.",

      "about.experience.freelance_spartan.company": "Spartan Gym",
      "about.experience.freelance_spartan.role": "Desarrollador Full-Stack",
      "about.experience.freelance_spartan.date": "May 2024 - Jul 2024",
      "about.experience.freelance_spartan.description": "Diseñé y desplegué un sitio web e-commerce para servicios de gimnasio usando React.js.",

      "about.experience.campuslands.company": "Campuslands",
      "about.experience.campuslands.role": "Técnico en Desarrollo de Software",
      "about.experience.campuslands.date": "Ene 2023 - Dic 2023",
      "about.experience.campuslands.description": "Programa intensivo de desarrollo de software de 1,800+ horas. Desarrollo backend, código limpio, metodologías ágiles.",

      "about.education.title": "Educación",
      "about.education.jala.institution": "Jala University | USA",
      "about.education.jala.degree": "Ingeniería en Software Comercial",
      "about.education.campuslands.institution": "Campuslands | Colombia",
      "about.education.campuslands.degree": "Técnico en Desarrollo de Software",
      "about.education.alura.institution": "Alura Latam | Brasil",
      "about.education.alura.degree": "Desarrollador Backend Profesional",

      "technologies.title": "Tecnologías",
      "technologies.subtitle": "Las herramientas y tecnologías que domino para construir sistemas escalables de nivel producción",
      "technologies.frontend": "Frontend",
      "technologies.backend": "Backend",
      "technologies.database": "Bases de datos",
      "technologies.tools": "DevOps & Herramientas",
      "technologies.stats.technologies": "Tecnologías",
      "technologies.stats.experience": "Años de Experiencia",
      "technologies.stats.categories": "Categorías",
      "technologies.stats.projects": "Proyectos",

      "projects.title": "Proyectos",
      "projects.subtitle": "Soluciones reales que he diseñado desde el concepto hasta el despliegue",
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
      "footer.description": "Ingeniero Backend construyendo la infraestructura detrás de productos escalables. De APIs a pipelines CI/CD — convierto ideas en sistemas listos para producción.",
      "footer.connect": "Conectemos",
      "footer.copyright": "© {{year}} Angel|Bladex. Todos los derechos reservados.",

      "projects.crimeio.title": "Crime.io",
      "projects.crimeio.description": "Plataforma de analítica predictiva de crimen usando datos históricos y visualizaciones interactivas para San Francisco. Utiliza un modelo de regresión lineal para pronosticar probabilidad de crimen por zona. 🏆 3er lugar en hackathon de IA.",

      "projects.avt.title": "Transacciones AVT",
      "projects.avt.description": "Sistema de gestión de transacciones de nivel empresarial con colas de prioridad, validación OTP vía QR code y notificaciones por email en tiempo real. Operaciones CRUD completas con gestión de estado robusta.",

      "projects.alura.title": "Foros Alura",
      "projects.alura.description": "Plataforma de foros comunitarios segura construida con Spring Boot, con autenticación de nivel empresarial usando Spring Security, JWT y OAuth2. Control de acceso basado en roles incluido.",

      "projects.spaceinvaders.title": "Invasores del Espacio",
      "projects.spaceinvaders.description": "El clásico Space Invaders reimaginado en C# con WinForms, aplicando arquitectura MVVM y principios sólidos de POO para una lógica de juego limpia y mantenible.",

      "projects.cis.title": "Proyecto CIS",
      "projects.cis.description": "Sistema de gestión de ideas y votaciones basado en microservicios, construido con Spring Boot, .NET Core y MongoDB. Implementa arquitectura hexagonal con seguridad robusta usando Spring Security y JWT.",

      "projects.pathfinder.title": "Buscador de Rutas",
      "projects.pathfinder.description": "Motor de cálculo de rutas de alto rendimiento usando programación funcional, caché inteligente y la ecuación de Haversine combinada con el algoritmo A* para una precisión óptima en pathfinding.",

      "projects.pilex.title": "PileX",
      "projects.pilex.description": "Plataforma de dibujo colaborativo en tiempo real que combina una API REST con WebSocket para sincronización en vivo, un frontend React con herramientas avanzadas de dibujo y mecánicas multijugador inspiradas en Agar.io.",

      "projects.stellers.title": "Stellers E-Commerce",
      "projects.stellers.description": "Plataforma e-commerce full-stack potenciada por NestJS, GraphQL y Arquitectura Hexagonal. Incluye autenticación Supabase, ORM Prisma y storefront en Svelte con gestión completa de productos y tienda.",

      "projects.clickup.title": "Framework de Testing ClickUp",
      "projects.clickup.description": "Suite completa de pruebas API para ClickUp cubriendo funcionalidad, rendimiento, seguridad y confiabilidad. Construida con Jest, Axios y principios de arquitectura limpia para automatización de pruebas mantenible.",

      "projects.hotelex.title": "HoteleX",
      "projects.hotelex.description": "Sistema completo de gestión y reservas hoteleras construido con Angular y NestJS. Incluye motor inteligente de sugerencia de habitaciones, búsqueda avanzada con filtros por ciudad, fechas, huéspedes y presupuesto, autenticación JWT e interfaz responsiva con Angular Material."
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
